// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-5c162.firebaseapp.com",
  projectId: "mern-blog-5c162",
  storageBucket: "mern-blog-5c162.appspot.com",
  messagingSenderId: "742690172144",
  appId: "1:742690172144:web:1a97c8eaab0ef0385e2635"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);