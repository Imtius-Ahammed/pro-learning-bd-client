// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-N9KT2GbOprQNiPgSU9n_dtRV8vCOna4",
  authDomain: "pro-learning-bd.firebaseapp.com",
  projectId: "pro-learning-bd",
  storageBucket: "pro-learning-bd.appspot.com",
  messagingSenderId: "398868849656",
  appId: "1:398868849656:web:9090c2335e240d28806c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;