import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAenMGlZmV7-lCyCwenO3IqGaO_t4fo6A",
    authDomain: "ritik-kart.firebaseapp.com",
    projectId: "ritik-kart",
    storageBucket: "ritik-kart.appspot.com",
    messagingSenderId: "941889432059",
    appId: "1:941889432059:web:4edbc2f2800c8a4752835e",
    measurementId: "G-QRD5R479CL"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};