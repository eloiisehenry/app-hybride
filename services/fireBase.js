// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACM8Unijoi9VPJVftGBfy3STNBj4VDg20",
  authDomain: "app-hybride-18fb5.firebaseapp.com",
  projectId: "app-hybride-18fb5",
  storageBucket: "app-hybride-18fb5.appspot.com",
  messagingSenderId: "564152236350",
  appId: "1:564152236350:web:ac9284e89f1dd8b60a146f"
};

const
app = initializeApp (firebaseConfig);

const
db = getFirestore(app);

const
auth = getAuth(app);

export {db, app, auth };