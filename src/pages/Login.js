import Container from "../layout/Container";
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Session } from "../context/Session";
import swal from "sweetalert";


const initialForm = {
  email: "",
  password: ""
}


const Login = () => {

  const history = useHistory();

  const InicioSesionExitosa = (token) => {
    swal({
      title: 'Inicio de Sesión Exitosa',
      text: 'Bienvenido',
      icon: 'success',
      timer: '1000',
      showCancelButton: false,
      showConfirmButton: false
    }).then(() => {
      //Almacenamiento del token y redirección después de 3 segundos
      setSession({ token })
      history.push('./students');
    }
    );
  }
  const InicioSesionError = () => {
    swal({
      title: 'Inicio de Sesión Fallida',
      text: 'Intente Nuevamente',
      icon: 'error',
      timer: '2000'
    });
  }
  const [form, setForm] = useState(initialForm)
  const handleChange = (e) => {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('https://tecnosearch.herokuapp.com/api/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(form)
    });
    const response = await res.json();

    //Si la consulta es devuelve el token lo guardamos en el contexto de la sesión 
    if (response.token) {
      localStorage.setItem('rstoken', response.token)
      console.log(response.token)

      //Agregar un mensaje para avisarle al usuario que ya inició sesión

      InicioSesionExitosa(response.token);

    } else {
      InicioSesionError();
    }
    //Agregar en un else algún mensaje para avisarle al usuario que la cuenta no existe.
  }

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
          style={{ marginBottom: "250px" }}
          onSubmit={handleSubmit}
        >
          <h1 style={{ textAlign: "center" }}>Iniciar Sesion</h1>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
           Recuerdame
            </label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
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
