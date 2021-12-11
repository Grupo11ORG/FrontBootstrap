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
      style={{
        width: "100%",
        height: "60px"

      }}
    >
    
      <div class="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/" style={{fontSize: "25px"   }}>
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
                <li class="nav-item" >
                  <Link class="nav-link" to="/login" style={{fontSize: "15px"}}><i class="glyphicon glyphicon-log-in"></i>
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/registrar" style={{fontSize: "15px"}}><i class="glyphicon glyphicon-new-window"></i>
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" style={{fontSize: "15px"}}><i class="glyphicon glyphicon-home"></i>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil" style={{fontSize: "15px"}}><i class="glyphicon glyphicon-user"></i> 
                    PerfilTec
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/admin" style={{fontSize: "15px"}}><i class="glyphicon glyphicon-floppy-disk"></i>
                    Admin
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <a class="nav-link" href="#about" style={{fontSize: "15px"}}>
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login" style={{fontSize: "15px"}}>
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/registrar" style={{fontSize: "15px"}}>
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/home" style={{fontSize: "15px"}}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/perfil" style={{fontSize: "15px"}}>
                    PerfilTec
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/admin" style={{fontSize: "15px"}}>
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
                    style={{fontSize: "15px"}}
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
