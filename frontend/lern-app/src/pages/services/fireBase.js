import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

//Setting up the firebase config

export const firebaseConfig = {

  apiKey: "AIzaSyDXrcHZKL0v3IG5Jeo9D4XV5_o2qPMoDf4",
  authDomain: "lernapp-d9ed1.firebaseapp.com",
  projectId: "lernapp-d9ed1",
  storageBucket: "lernapp-d9ed1.appspot.com",
  messagingSenderId: "730664101622",
  appId: "1:730664101622:web:542a4ccc1824f54c03aed7"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const PUBLIC_URL = "";