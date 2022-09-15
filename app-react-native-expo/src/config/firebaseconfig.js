import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCfqrDIgrLJ114RGBEGKK8aEHVpHc0iM8s",
  authDomain: "iot-tcc-01.firebaseapp.com",
  databaseURL: "https://iot-tcc-01-default-rtdb.firebaseio.com",
  projectId: "iot-tcc-01",
  storageBucket: "iot-tcc-01.appspot.com",
  messagingSenderId: "128491589921",
  appId: "1:128491589921:web:06cf468832ef203ef3ae60"
};

const app = initializeApp(firebaseConfig);

const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});;

export default database;