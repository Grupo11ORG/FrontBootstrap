import React from "react";
import Container from "../layout/Container";

const Admin = () => {
  return (
    <Container>
      <div className="container" style={{marginTop:"5%", width:"90%"}}>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Marco</td>
              <td>MarcusENP</td>
              <td>akalimidiosa@gmail.com</td>
              <td>Usuario</td>
              <td>Activo</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
              <td>
                <button className="btn btn-success">Editar</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nico</td>
              <td>KaisaLover</td>
              <td>nickdaboom2@gmail.com</td>
              <td>Papasito</td>
              <td>Activo</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
              <td>
                <button className="btn btn-success">Editar</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gaby</td>
              <td>4Chan</td>
              <td>tuminaenelnumerosublime@gmail.com</td>
              <td>Especialista</td>
              <td>Pasivo, digo Inactivo</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
              <td>
                <button className="btn btn-success">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Admin;