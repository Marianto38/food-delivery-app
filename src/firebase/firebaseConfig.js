// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const dataBase = getFirestore(app);