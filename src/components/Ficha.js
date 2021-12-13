import React from "react";
import Container from "../layout/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ficha = () => {
  const params = useParams();
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async (id) => {
    const urlPeticion =
      "https://tecnosearch.herokuapp.com/api/profesionales/" + params.id;

    /*const options = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    };*/
    try {
      const data = await fetch(urlPeticion);
      const res = await data.json();
      setDatos(res);
    } catch (error) {
      console.log("Hubo un error en la petición. " + error);
    }
  };

  useEffect(() => {
    obtenerDatos(params.id);
  }, []);
  return (
    <>
      {datos.map((item) => (
        <div key={item._id}>
          <div className="form-group" key={item._id}>
            <h1>--Datos Personales---</h1>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                value={item.datos_personales.nombre_completo}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>Sexo</label>
              <input
                type="text"
                className="form-control"
                value={item.datos_personales.sexo}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>Telefono</label>
              <input
                type="text"
                className="form-control"
                value={item.datos_personales.telefono}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={item.datos_personales.email}
              />
            </div>
          </div>
          <div className="form-group" key={item._id}>
            <h1>--info profesional--</h1>
            <div className="form-group">
              <label>Certificaciones</label>
              <input
                type="text"
                className="form-control"
                value={item.info_profesional.certificaciones[0]}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>rubro</label>
              <input
                type="text"
                className="form-control"
                value={item.info_profesional.rubro[0]}
              />
            </div>
          </div>

          <div className="form-group" key={item._id}>
            <div className="form-group">
              <label>Dias de atención</label>
              <input
                type="text"
                className="form-control"
                value={item.info_lugar_trabajo.dias_atencion}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>Horario de atención</label>
              <input
                type="text"
                className="form-control"
                value={item.info_lugar_trabajo.horario_atencion}
              />
            </div>

            <div className="form-group" key={item._id}>
              <label>Dirección</label>
              <input
                type="text"
                className="form-control"
                value={item.info_lugar_trabajo.direccion}
              />
            </div>
            <div className="form-group">
              <label>{item.info_profesional.likes}</label>
              <button className="btn btn-primary">Like</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Ficha;
