// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-39b09.firebaseapp.com",
  projectId: "mern-estate-39b09",
  storageBucket: "mern-estate-39b09.appspot.com",
  messagingSenderId: "639115421366",
  appId: "1:639115421366:web:80b27700f52f030abbe817",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
