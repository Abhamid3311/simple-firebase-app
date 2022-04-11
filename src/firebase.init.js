// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtDtDuSiIkNNlju6P-NB6jOo05cJgLyBM",
    authDomain: "simple-firebase-authenti-b7e42.firebaseapp.com",
    projectId: "simple-firebase-authenti-b7e42",
    storageBucket: "simple-firebase-authenti-b7e42.appspot.com",
    messagingSenderId: "158406861880",
    appId: "1:158406861880:web:c13c604200e21a7a53f2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;