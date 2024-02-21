// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "dreamhome-2c9b8.firebaseapp.com",
  projectId: "dreamhome-2c9b8",
  storageBucket: "dreamhome-2c9b8.appspot.com",
  messagingSenderId: "585271375489",
  appId: "1:585271375489:web:b942e5b8ba5cd0c8e5ff80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);