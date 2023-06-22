// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLs1_hIZ-adYZBonuof1vpKQM0C864d4A",
  authDomain: "food-delivery-app-3582e.firebaseapp.com",
  projectId: "food-delivery-app-3582e",
  storageBucket: "food-delivery-app-3582e.appspot.com",
  messagingSenderId: "191587341012",
  appId: "1:191587341012:web:2a14df1b0bfdebf8bbe141",
  measurementId: "G-XJWQ4BL3HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Autentication and get a reference to the service.
export const auth = getAuth(app);
//console.log(auth);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
//Initialize db to save phone and birthday
//const db = dataBase; // Asigna 'dataBase' a 'db'

// import {  setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


// setPersistence(auth, browserSessionPersistence)
//   .then(() => {
//     // Existing and future Auth states are now persisted in the current
//     // session only. Closing the window would clear any existing state even
//     // if a user forgets to sign out.
//     // ...
//     // New sign-in will be persisted with session persistence.
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });