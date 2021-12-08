import Container from "../layout/Container";

const Register = () => {
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
          <div className="form-group">
            <label>Apellido y nombre</label>
            <input
              type="Text"
              className="form-control"
              placeholder="Ingrese su apellido y nombre"
            />
          </div>
          <div className="form-group">
            <label>DNI</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese su dni"
            />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento</label>
            <input type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label>Sexo</label>
            <select className="form-control">
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
              type="number"
              className="form-control"
              placeholder="Ingrese su número de teléfono"
            ></input>
          </div>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
            ></input>
          </div>
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre de usuario"
            ></input>
          </div>
          <div class="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <br></br>
          <div>
            <button type="submit" className="btn btn-success">
              REGISTRARME
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
