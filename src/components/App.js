import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <div>{isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}</div>

       
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/playground">PlayGround</Link></li>
          </ul>
       

        <Switch>
          <Route
            path="/login"
            render={() => <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/playground"
            render={() =>
              isAuthenticated ? <Playground /> : <Redirect to="/login" />
            }
          />
          <Route render={() => <h2>Page Not Found</h2>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
