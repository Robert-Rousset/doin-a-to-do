import Dashboard from "./componenets/Dashboard";
import Signin from "./componenets/Signin";

function App() {
  let signedIn = true;
  return <>{signedIn ? <Dashboard /> : <Signin />}</>;
}

export default App;
