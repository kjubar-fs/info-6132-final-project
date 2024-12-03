// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcJpxttAHInF3VND14SL13zGH31CvyYAU",
  authDomain: "info-6132-finalproject.firebaseapp.com",
  projectId: "info-6132-finalproject",
  storageBucket: "info-6132-finalproject.firebasestorage.app",
  messagingSenderId: "720361724991",
  appId: "1:720361724991:web:91001446aaa4c6c121ec8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// Initialize Firebase Firestore
const db = getFirestore(app)

export { auth, db }