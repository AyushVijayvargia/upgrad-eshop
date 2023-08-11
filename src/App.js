import React from "react";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route,Routes, Link, BrowserRouter } from "react-router-dom";
import MuiNavbar from "./components/navbar/MuiNavbar";
import SignUp from "./components/signup/SignUp";


const App = () => {
  return (
      
          <Routes>
                <Route path="/" element={<MuiNavbar />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<><MuiNavbar/><Login /></>}/>
               
    
          </Routes>
        

       
    );
};

export default App;
