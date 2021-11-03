import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import SignIn from "./componenets/SignIn";

function App() {
  const signedIn = localStorage.getItem("SignedIn");
  return (
    <div className="background">
      <Router>
        {signedIn ? (
          <>
            <Redirect to="/dashboard" />
            <Route exact path="/dashboard" component={Dashboard} />
          </>
        ) : (
          <>
            <Redirect to="/signin" />{" "}
            <Route exact path="/signin" component={SignIn} />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
