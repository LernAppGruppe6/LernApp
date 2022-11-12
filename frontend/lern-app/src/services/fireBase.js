
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDXrcHZKL0v3IG5Jeo9D4XV5_o2qPMoDf4",
  authDomain: "lernapp-d9ed1.firebaseapp.com",
  projectId: "lernapp-d9ed1",
  storageBucket: "lernapp-d9ed1.appspot.com",
  messagingSenderId: "730664101622",
  appId: "1:730664101622:web:542a4ccc1824f54c03aed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

export const signInWithGoogle =() => {
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilPic", profilePic)
    }).catch(error => console.log(error))
}