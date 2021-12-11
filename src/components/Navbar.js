import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Session } from "../context/Session";

const Navbar = () => {
  const history = useHistory();

  const [session, setSession] = useContext(Session);

  return (
    // navbar-shrink

    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-shrink"
      id="mainNav"
    >
      <div class="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <i class="glyphicon glyphicon-phone"></i>TechSearch
        </Link>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            {session === null ? (
              <>
                {/* <li class="nav-item"><Link class="nav-link" href="#about">About</Link></li> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/registrar">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil">
                    PerfilTec
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/registrar">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil">
                    PerfilTec
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={() => {
                      setSession(null);
                      localStorage.removeItem("rstoken");
                      history.push("/login");
                    }}
                  >
                    Cerrar sesión
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
