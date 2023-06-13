// file configuration firebase.

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBtRxfbfybyqFHP1PmOOYTh-l8znRJ1Z0s",
  authDomain: "boompadle.firebaseapp.com",
  projectId: "boompadle",
  storageBucket: "boompadle.appspot.com",
  messagingSenderId: "898158924292",
  appId: "1:898158924292:web:b982b68a6b9b42674e5b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)