// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2DqoKmbbgHZp7mc8W-AuFBIkpseYtpPE",
    authDomain: "fir-intro-2-ita-23.firebaseapp.com",
    projectId: "fir-intro-2-ita-23",
    storageBucket: "fir-intro-2-ita-23.appspot.com",
    messagingSenderId: "558181629901",
    appId: "1:558181629901:web:63b4d6c2eaed16d44f4e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

