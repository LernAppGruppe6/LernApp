import React from "react";
import { signInWithGoogle } from "./services/fireBase";

const App = () => {

  return (
    <div className="App">
    <h1>LernApp</h1>
    <button onClick={signInWithGoogle}>Sign In with Google</button>
    <h1>{localStorage.getItem("name")}</h1>  
    </div>  
  );

};
export default App;

