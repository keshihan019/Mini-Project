// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8F23KVboKUZeAq6JkoRLjpWdOb0OvBXs",
  authDomain: "miniproject-1590d.firebaseapp.com",
  projectId: "miniproject-1590d",
  storageBucket: "miniproject-1590d.appspot.com",
  messagingSenderId: "974296977896",
  appId: "1:974296977896:web:5dac3b0ace45279113945d"
};

// Initialize Firebase
let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore,firebase };