import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import SignIn from "./componenets/SignIn";

function App() {
  const signedIn = localStorage.getItem("signedIn");
  return (
    <div className="background">
      <Router>
        {signedIn ? (
          <>
            <Redirect to="/dashboard" />
            <Route path="/dashboard" exact component={Dashboard} />
          </>
        ) : (
          <>
            <Redirect to="/signin" />{" "}
            <Route path="/signin" exact component={SignIn} />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
