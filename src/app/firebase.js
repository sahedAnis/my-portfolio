// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjyT1veqcmfP57S88jQxucgQTvqLlbsok",
  authDomain: "anis-sahed.firebaseapp.com",
  projectId: "anis-sahed",
  storageBucket: "anis-sahed.appspot.com",
  messagingSenderId: "686506714834",
  appId: "1:686506714834:web:9c0b3220d551af13a16f0b",
  measurementId: "G-58FBHTD7WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);