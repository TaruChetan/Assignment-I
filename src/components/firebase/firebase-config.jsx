import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8dGIXvckwccU54e7m7EJnpviFbKW3ZME",
  authDomain: "personal-auth-ea956.firebaseapp.com",
  projectId: "personal-auth-ea956",
  storageBucket: "personal-auth-ea956.appspot.com",
  messagingSenderId: "948394261861",
  appId: "1:948394261861:web:d25ec4c0cb4035dcb7f58c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
