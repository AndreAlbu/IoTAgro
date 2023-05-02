const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {Expo} = require("expo-server-sdk");
admin.initializeApp();
const expo = new Expo();

exports.notifyOnStateChange = functions.database.ref("/estadoBomba")
    .onUpdate(async (change, context) => {
      const newValue = change.after.val();

      const payload = {
        notification: {
          title: "Estado da bomba alterado",
          // eslint-disable-next-line max-len
          body: `A bomba foi ${newValue == 1 ? "ligada" : "Desligada"}, entre já no app e saiba mais`,
        },
      };

      const tokensSnapshot = await admin.database().ref("tokens").once("value");
      const tokens = Object.values(tokensSnapshot.val());

      // Filter out invalid tokens
      const expoTokens = [];
      for (const token of tokens) {
        if (!Expo.isExpoPushToken(token)) {
          console.error(`Invalid Expo push token ${token}`);
          continue;
        }
        expoTokens.push(token);
      }

      const messages = expoTokens.map((token) => ({
        to: token,
        sound: "default",
        title: payload.notification.title,
        body: payload.notification.body,
      }));

      const chunks = expo.chunkPushNotifications(messages);

      const sendChunks = async () => {
        for (const chunk of chunks) {
          try {
            const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            console.log(ticketChunk);
          } catch (error) {
            console.error(`Error sending notification: ${error}`);
          }
        }
      };
      await sendChunks();
      return null;
    });
