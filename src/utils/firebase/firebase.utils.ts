import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3aXR0dbCR1ER6s8kl21UH_QU6p_0r7PY",

  authDomain: "crwn-clothing-db-15429.firebaseapp.com",

  projectId: "crwn-clothing-db-15429",

  storageBucket: "crwn-clothing-db-15429.appspot.com",

  messagingSenderId: "215252640271",

  appId: "1:215252640271:web:5c241a783a10acb64a397a",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
