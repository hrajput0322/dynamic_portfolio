// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkzGoC7Pv2tYzZOI4lbR4aluwA1WMFgho",
  authDomain: "dynamic-portfolio-cd96c.firebaseapp.com",
  projectId: "dynamic-portfolio-cd96c",
  storageBucket: "dynamic-portfolio-cd96c.appspot.com",
  messagingSenderId: "4717522349",
  appId: "1:4717522349:web:93d67307d3090718228524",
  measurementId: "G-SXJWG13CK6",
  databaseURL: "https://dynamic-portfolio-cd96c-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);