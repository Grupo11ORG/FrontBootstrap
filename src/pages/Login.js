import Container from "../layout/Container";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Session } from "../context/Session";
import swal from "sweetalert";

const initialForm = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useHistory();

  const InicioSesionExitosa = (token) => {
    swal({
      title: "Inicio de Sesión Exitosa",
      text: "Bienvenido",
      icon: "success",
      timer: "1000",
      showCancelButton: false,
      showConfirmButton: false,
    }).then(() => {
      setSession({ token });
      console.log(token);
      history.push("./home");
    });
  };
  const InicioSesionError = () => {
    swal({
      title: "Inicio de Sesión Fallida",
      text: "Intente Nuevamente",
      icon: "error",
      timer: "2000",
    });
  };
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("https://tecnosearch.herokuapp.com/api/login", {
      method: "POST",
      // mode: "cors",
      // cache: "no-cache",
      // credentials: "sSame-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    });
    const response = await res.json();

    //Si la consulta es devuelve el token lo guardamos en el contexto de la sesión
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      InicioSesionExitosa(response.data.token);
    } else {
      InicioSesionError();
    }
  };

  //Getter y Setter de la sesión
  const [session, setSession] = useContext(Session);

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <div data-aos="fade-up">
        <form
          className="container border shadow-lg bg-white rounded"
          style={{ marginBottom: "250px", width: "50%" }}
          onSubmit={handleSubmit}
        >
          <h1 style={{ textAlign: "center" }}>Iniciar Sesion</h1>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Recuerdame
            </label>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
          <br />
          {/* <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/> */}
        </form>
      </div>
    </Container>
  );
};

export default Login;
