// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0GOwy5rEP8kE5HIBT_FnWXuXFbln4X1I",
  authDomain: "codingblog-90cd9.firebaseapp.com",
  projectId: "codingblog-90cd9",
  storageBucket: "codingblog-90cd9.appspot.com",
  messagingSenderId: "1065870441950",
  appId: "1:1065870441950:web:82cb2707e017a25fa9b14f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
