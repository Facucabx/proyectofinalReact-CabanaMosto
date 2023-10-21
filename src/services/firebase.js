// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATNGuvbUPWQhJ-4h6VNYorcCkP0xjQuQs",
  authDomain: "ecommerce-e3c92.firebaseapp.com",
  projectId: "ecommerce-e3c92",
  storageBucket: "ecommerce-e3c92.appspot.com",
  messagingSenderId: "1091301097516",
  appId: "1:1091301097516:web:08caa8fa3dd89c8d65d189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)