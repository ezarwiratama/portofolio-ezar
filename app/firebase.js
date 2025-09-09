import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR4sUEr-xrwIr4Fi6EY_CRcPXUAJtZMvk",
  authDomain: "porto-ezar.firebaseapp.com",
  projectId: "porto-ezar",
  storageBucket: "porto-ezar.firebasestorage.app",
  messagingSenderId: "165063317406",
  appId: "1:165063317406:web:8a80e92b899349a8aaa88f",
  measurementId: "G-Y4L2RDFGX5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
