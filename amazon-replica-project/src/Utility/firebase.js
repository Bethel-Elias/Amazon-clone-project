// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// auth
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASrpZBrceErxr4FdmZ_28GXo_cXs57WYE",
  authDomain: "clone-a73d3.firebaseapp.com",
  projectId: "clone-a73d3",
  storageBucket: "clone-a73d3.firebasestorage.app",
  messagingSenderId: "220910340180",
  appId: "1:220910340180:web:3e386170e623f3dfa1c5c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
