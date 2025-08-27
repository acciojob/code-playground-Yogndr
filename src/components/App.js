import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";

const NotFound = () => <>Page Not Found</>;

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
            <li><Link to="/">PlayGround</Link></li>
          </ul>
       

        <Switch>
          <Route
            path="/login"
            render={() => <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            render={() =>
              isAuthenticated ? <Playground isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/> : <Redirect to="/login" />
            }
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
