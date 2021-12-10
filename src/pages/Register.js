import Container from "../layout/Container";
import { useHistory } from 'react-router-dom';
import { registerSchema } from "../validations/vRegister";
import { useState, useEffect } from "react";








const initialForm = {
  nombre_apellido: "",
  dni: "",
  fecha_Nac: "",
  sexo: "",
  telefono: "",
  correo: "",
  username: "",
  password: "",
  conf_password: "",

};







const Register = () => {

  const [form, setForm] = useState(initialForm)
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();
 
  const [mostrarMensaje, setMostrarMensaje] = useState(null)
  const History = useHistory()



  const registrarnuevoUsuario = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(form),
      redirect: 'follow'
    }

    fetch('https://https://tecnosearch.herokuapp.com/register', options)
      .then(res => res.json())
      .then(
        (res) => {
          console.log(res)
          if (!res.errores) {
            // console.log(res) 
            setMostrarMensaje({ message: 'Usuario agregado correctamente', style: 'alert alert-success' });

            setTimeout(() => {
              setMostrarMensaje(null)
              history.push('/login')
            }, 3000)

          } else {
            setMostrarMensaje({ message: 'El usuario ya existe', style: 'alert alert-danger' });

            setTimeout(() => {
              setMostrarMensaje(null)

            }, 3000)
          }




        },
        (errors) => { console.log(errors) })


    // console.log(options);

  }


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    }

    )

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    registrarnuevoUsuario()

  }


  useEffect(() => {
    registerSchema.isValid(form).then((esValido) => {
      console.log(!esValido)
      setDisableBtn(!esValido);
    })
    console.log(form)

  }, [form]);

  return (

    <Container>
      <br></br>
      <br></br>
      <br></br>
      <div>
        {/*data-aos="fade-up"*/}
        <form
          className="border shadow-lg bg-white rounded"
          style={{
            marginLeft: "25%",
            marginRight: "25%",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>DESEO REGISTRARME</h1>
          <div className="form-group"  >
            <label>Apellido y nombre</label>
            <input
              name="nombre_apellido"
              type="Text"
              className="form-control"
              placeholder="Ingrese su apellido y nombre"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>DNI</label>
            <input
              name="dni"
              type="number"
              className="form-control"
              placeholder="Ingrese su dni"
              onChange={handleChange}
            />
          </div>
          <div className="form-group" onChange={handleChange}>
            <label>Fecha de Nacimiento</label>
            <input name="fecha_Nac" type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label>Sexo</label>
            <select className="form-control" onChange={handleChange} name="sexo">
              <option selected disabled>
                - Seleccione -
              </option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <label>Número de teléfono</label>
            <input
              name="telefono"
              type="number"
              className="form-control"
              placeholder="Ingrese su número de teléfono"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              name="correo"
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre de usuario"
              onChange={handleChange}
            ></input>
          </div>
          <div class="form-group">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Confirmar contraseña</label>
            <input
              name="conf_password"
              type="password"
              className="form-control"
              placeholder="Confirme su contraseña"
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div>
            <button type="submit" className="btn btn-success" disabled={disableBtn} onSubmit={handleSubmit} to='/'>
              REGISTRARME
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
