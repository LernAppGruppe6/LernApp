import { signInWithGoogle } from "./services/fireBase";

function App() {
  return (
    <div className="App">
      <h1>LernApp</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      
    </div>
  );
}

export default App;
