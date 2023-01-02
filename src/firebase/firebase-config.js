// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAOn7c2loEMLq3_NX0MJ91O-1Bcjf3CRxY",
  authDomain: "journal-auth.firebaseapp.com",
  projectId: "journal-auth",
  storageBucket: "journal-auth.appspot.com",
  messagingSenderId: "410299439070",
  appId: "1:410299439070:web:5687cad2c1316cd24d2f4f",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebsaeDB = getFirestore(FirebaseApp);
