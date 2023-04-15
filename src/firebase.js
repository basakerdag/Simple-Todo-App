// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8LsD510i2Tngj676i5sdUsIOTw4i33vU",
  authDomain: "simple-todo-app-7a325.firebaseapp.com",
  projectId: "simple-todo-app-7a325",
  storageBucket: "simple-todo-app-7a325.appspot.com",
  messagingSenderId: "1007035049718",
  appId: "1:1007035049718:web:1eb2d9c426997dc7cdaed7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
