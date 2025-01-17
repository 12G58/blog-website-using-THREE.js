// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"; 
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZiZZRSPqgPTUhZun4jx2Xrmc8PBCJymU",
  authDomain: "synthesis-95963.firebaseapp.com",
  projectId: "synthesis-95963",
  storageBucket: "synthesis-95963.appspot.com",
  messagingSenderId: "632081466681",
  appId: "1:632081466681:web:7c45db17cbdfb1bc0b54e8",
  measurementId: "G-00DN5GSPSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 
