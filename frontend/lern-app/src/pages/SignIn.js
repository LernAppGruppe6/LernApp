import { signInWithGoogle } from "../services/fireBase";


export default function SignIn() {
  return (
    <> 
    <ul>
    <button onClick={signInWithGoogle}>Sign In with Google</button>
    <h1>{localStorage.getItem("name")}</h1>  
    </ul>
    </>
    );

};

