import Header from "./pages/layout/Header";
import SignIn from "./pages/SignIn"
import Learngroup from "./pages/LernGroup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Message from "./pages/Message";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <> 
    <div className="signin">
    <Header />
    <Routes>
      <Route path="signin" element={<SignIn />}/>
      <Route path="dashboard" element={<Dashboard />}/>
      <Route path="profile" element={<Profile />}/>
      <Route path="learngroup" element={<Learngroup />}/>
      <Route path="message" element={<Message />}/>
    </Routes>
    <ul>
    </ul>
    </div>  
    <div className="container"></div>
    </>
    );

};
export default App;

