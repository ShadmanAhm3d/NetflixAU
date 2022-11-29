// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyATmbJlQjmM867UivpksNGlWmuWMglgnKU",
  authDomain: "react-netflix-clone-1d14a.firebaseapp.com",
  projectId: "react-netflix-clone-1d14a",
  storageBucket: "react-netflix-clone-1d14a.appspot.com",
  messagingSenderId: "595787291927",
  appId: "1:595787291927:web:f5d53587feba06c181eb52",
  measurementId: "G-EN8LZ1ECLF"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

