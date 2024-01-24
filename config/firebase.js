// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbw3Ns0jj4Nz33idndLiZsP2PAOOG8ad8",
  authDomain: "login-f16fa.firebaseapp.com",
  projectId: "login-f16fa",
  storageBucket: "login-f16fa.appspot.com",
  messagingSenderId: "1045847359974",
  appId: "1:1045847359974:web:04115f5b3d1913ec035627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);