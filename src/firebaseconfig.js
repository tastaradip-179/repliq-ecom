// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVoM5aktGeuFyzX9KgiZ3cRnOo6yorGJk",
  authDomain: "repliq-ecom.firebaseapp.com",
  projectId: "repliq-ecom",
  storageBucket: "repliq-ecom.appspot.com",
  messagingSenderId: "1064724627626",
  appId: "1:1064724627626:web:9275530676d30e148fd0d3",
  measurementId: "G-KRXCWKFTG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);