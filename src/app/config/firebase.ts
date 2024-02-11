// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBoyAnoWCx4y3Se1AaJ32hYPDBWDfFKqp0",
  authDomain: "movie-app-40445.firebaseapp.com",
  projectId: "movie-app-40445",
  storageBucket: "movie-app-40445.appspot.com",
  messagingSenderId: "106059811002",
  appId: "1:106059811002:web:baa55b73d295ad9d2c5a83",
  measurementId: "G-W9D78NX53P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth:Auth = getAuth(app)