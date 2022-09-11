// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfqrDIgrLJ114RGBEGKK8aEHVpHc0iM8s",
  authDomain: "iot-tcc-01.firebaseapp.com",
  databaseURL: "https://iot-tcc-01-default-rtdb.firebaseio.com",
  projectId: "iot-tcc-01",
  storageBucket: "iot-tcc-01.appspot.com",
  messagingSenderId: "128491589921",
  appId: "1:128491589921:web:06cf468832ef203ef3ae60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);