// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYfFEPy1qHf47xvLFi3YUmgakBjQuYTRA",
  authDomain: "netflixgpt-6bf39.firebaseapp.com",
  projectId: "netflixgpt-6bf39",
  storageBucket: "netflixgpt-6bf39.firebasestorage.app",
  messagingSenderId: "721277901992",
  appId: "1:721277901992:web:6f47078437cee40ecfb69d",
  measurementId: "G-YDRVLTWC9W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
