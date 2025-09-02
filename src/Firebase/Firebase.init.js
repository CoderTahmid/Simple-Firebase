// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJVUOymb73LNg-M6g_rAyPV2M5EqV75zs",
  authDomain: "simple-firebase2-940a5.firebaseapp.com",
  projectId: "simple-firebase2-940a5",
  storageBucket: "simple-firebase2-940a5.firebasestorage.app",
  messagingSenderId: "500202812337",
  appId: "1:500202812337:web:e340cf90e1c6340c104390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;