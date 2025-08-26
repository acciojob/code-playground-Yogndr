
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";

const App = () => {
  const[isAuthenticated,setIsAuthenticated]=useState(false);
  return (
    <BrowserRouter>
    <div>

      {isAuthenticated 
   ? "Logged in, Now you can enter Playground" 
   : "You are not authenticated, Please login first"}
   

      <div>
        <nav>
          <ul>
               <li> <Link to="/login">Login</Link></li>
      
      
      <li><Link to="/playground">PlayGround</Link></li>
      </ul>
      
      </nav></div>

      <Routes>
        <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path="/playground" element={isAuthenticated?<Playground/>:<Navigate to="/login"/>}/>
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
