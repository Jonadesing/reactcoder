
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDu0WYT_GCTRuafQmKv2jSqjUNLzHzT58Y",
  authDomain: "audiomant-ecommerce.firebaseapp.com",
  projectId: "audiomant-ecommerce",
  storageBucket: "audiomant-ecommerce.appspot.com",
  messagingSenderId: "179780810193",
  appId: "1:179780810193:web:24cd9e76926efa15ee1cf0",
  measurementId: "G-1SZPHD905V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);