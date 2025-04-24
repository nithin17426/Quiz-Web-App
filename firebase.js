
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIC7gNJ2iAVuwDwRdI8tnB1C1PgAY2C3E",
  authDomain: "quiz-web-app-c0698.firebaseapp.com",
  projectId: "quiz-web-app-c0698",
  storageBucket: "quiz-web-app-c0698.firebasestorage.app",
  messagingSenderId: "862143285407",
  appId: "1:862143285407:web:5592077c093013fb7f7aaa",
  measurementId: "G-3WQQZSBLPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
