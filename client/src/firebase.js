// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-51696.firebaseapp.com",
  projectId: "mern-auth-51696",
  storageBucket: "mern-auth-51696.firebasestorage.app",
  messagingSenderId: "242229165669",
  appId: "1:242229165669:web:991187e135ed4dce30508c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
