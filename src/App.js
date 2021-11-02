import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Dashboard from "./componenets/Dashboard";
import Signin from "./componenets/Signin";

function App() {
  let signedIn = false;

  return (
    <Router>
      {signedIn ? (
        <Route exact path="/dashboard" component={Dashboard} />
      ) : (
        <>
          <Redirect to="/signin" />{" "}
          <Route exact path="/signin" component={Signin} />
        </>
      )}
    </Router>
  );
}

export default App;
