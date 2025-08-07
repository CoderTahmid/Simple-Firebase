// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD6IPGs97qDpdPV3Hpn0zNA-bT5KLFugs",
    authDomain: "simple-firebase-fec87.firebaseapp.com",
    projectId: "simple-firebase-fec87",
    storageBucket: "simple-firebase-fec87.firebasestorage.app",
    messagingSenderId: "247786513019",
    appId: "1:247786513019:web:be7d9a1ab771ce6e7738de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;