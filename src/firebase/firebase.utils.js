import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhp08hEyI0OH5v9okLGSBqd7TN4SwjvCM",
  authDomain: "crwn-db-528c9.firebaseapp.com",
  databaseURL: "https://crwn-db-528c9.firebaseio.com",
  projectId: "crwn-db-528c9",
  storageBucket: "crwn-db-528c9.appspot.com",
  messagingSenderId: "746519204533",
  appId: "1:746519204533:web:f16f1c452806e0e13664fc",
  measurementId: "G-HVXTK7C9JP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
