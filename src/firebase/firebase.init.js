// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3LM36LpZlvoLBtncRNkR8SSzUKK2Pcw",
  authDomain: "smart-deals-aa5d4.firebaseapp.com",
  projectId: "smart-deals-aa5d4",
  storageBucket: "smart-deals-aa5d4.firebasestorage.app",
  messagingSenderId: "10285931677",
  appId: "1:10285931677:web:0037499f95e948d8630874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);