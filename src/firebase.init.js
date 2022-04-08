// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1CuGtviicMkgkJb7KpcjYRjAYt__3sCY",
  authDomain: "rowter-firebase-intigution.firebaseapp.com",
  projectId: "rowter-firebase-intigution",
  storageBucket: "rowter-firebase-intigution.appspot.com",
  messagingSenderId: "743476960157",
  appId: "1:743476960157:web:71d1882f3a3fc50defad74",
  measurementId: "G-3XJ52PQPZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;