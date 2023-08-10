// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore from firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2QaK-InjDw4J_avDgHpkwHetB4Obsxo",
  authDomain: "app-san-pedro.firebaseapp.com",
  projectId: "app-san-pedro",
  storageBucket: "app-san-pedro.appspot.com",
  messagingSenderId: "233867533938",
  appId: "1:233867533938:web:f1a912d64cbf7f5caeaceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };