import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: "https://iot-tcc-01-default-rtdb.firebaseio.com",
  projectId: "iot-tcc-01",
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: "128491589921",
  appId: `${process.env.REACT_APP_APP_ID}`
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export default database;