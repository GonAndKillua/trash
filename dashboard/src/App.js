import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/signup" component={Signup} />

        <Route exact path="/" component={Login} />
      </Switch>
    </>
  );
}

export default App;
