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
            <Redirect to="/doin-a-to-do/dashboard" />
            <Route path="/doin-a-to-do/dashboard" component={Dashboard} />
          </>
        ) : (
          <>
            <Redirect to="/doin-a-to-do/signin" />{" "}
            <Route exact path="/doin-a-to-do/signin" component={SignIn} />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
