import Header from "./components/Header/Header";
import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registar from "../src/pages/registar/Registar";
import Login from "../src/pages/login/Login";
import Single from "../src/pages/single/Single";
import Write from "../src/pages/write/Write";
import Settings from "../src/pages/settings/Settings";
function App() {
  const currentUser = true;
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/posts">
            <Home />
          </Route>
          <Route path="/registar">
            {currentUser ? <Home /> : <Registar />}
          </Route>
          <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
          <Route path="/post/:Id">
            <Single />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
