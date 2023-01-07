import Header from "./pages/layout/Header";
import SignIn from "./pages/SignIn"
import Learngroup from "./pages/LernGroup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Message from "./pages/Message";
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";

function App() {
  return (
    <> 
    <ThemeProvider theme={Theme}>
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
    </ThemeProvider>
    </>
    );

};
export default App;

