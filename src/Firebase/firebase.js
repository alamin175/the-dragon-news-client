// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCADu1xYdAR17B1SduStQrEuWS2n0I1_Tg",
  authDomain: "the-news-dragon-client-38849.firebaseapp.com",
  projectId: "the-news-dragon-client-38849",
  storageBucket: "the-news-dragon-client-38849.appspot.com",
  messagingSenderId: "555266622746",
  appId: "1:555266622746:web:92ebf00fe6ef4b6abe98a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;