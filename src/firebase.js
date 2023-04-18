import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-7WPN9XEET5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
export const storage = getStorage();



// new firebase project 
// const firebaseConfig = {
//   apiKey: "AIzaSyDVa82pMJxa-6yiktN7wGrYw2U2Ml6cWPs",
//   authDomain: "chatapp-cae66.firebaseapp.com",
//   projectId: "chatapp-cae66",
//   storageBucket: "chatapp-cae66.appspot.com",
//   messagingSenderId: "984099331613",
//   appId: "1:984099331613:web:e645ab301ccaba654370f4",
//   measurementId: "G-VP49P51NLE"
// };