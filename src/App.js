import "./App.css";
//import Container from './layout/Container';
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import PerfilTec from "./pages/PerfilTec";
import Register from "./pages/Register";
//import Admin from "./pages/Admin";
import Ficha from "./pages/Ficha";
import { Session } from "./context/Session";
import Error404 from "./pages/Error404";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSession(localStorage.getItem("token"));
    }
  }, []);

  const [session, setSession] = useState(null);

  const Routing = () => {
    if (session != null) {
      return (
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/perfil" component={PerfilTec} />
          <Route exact path="/ficha/:id" component={Ficha} />
          <Route path="*" component={Error404} />
          {/* <Route exact path="/admin" component={Admin} /> */}
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={Register} />
          <Route path="*" component={Error404} />
        </Switch>
      );
    }
  };
  return (
    <Session.Provider value={[session, setSession]}>
      <Router>
        <Routing />
      </Router>
    </Session.Provider>
  );
}

export default App;
