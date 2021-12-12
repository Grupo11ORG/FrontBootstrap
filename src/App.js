import "./App.css";
//import Container from './layout/Container';
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import {
  BrowserRouter as Router,
  Route,
  //Routing,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import PerfilTec from "./pages/PerfilTec";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Ficha from "./pages/Ficha";

import { Session } from "./context/Session";
import { useState } from "react";

function App() {
  const [session, setSession] = useState(null);
  const Routing = () => {
    if (session != null) {
      return (
        <Switch>
          <Route exact path="/" component={Principal} />
          {/* <Route exact path="/principal" component={Principal} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/perfil" component={PerfilTec} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrar" component={Register} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route exact path="/" component={Principal} />
        {/* <Route exact path="/principal" component={Principal} /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/perfil" component={PerfilTec} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrar" component={Register} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/ficha/" component={Ficha} />
      </Switch>
    );
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
