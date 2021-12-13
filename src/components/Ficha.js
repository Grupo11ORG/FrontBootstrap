import React from "react";
//import Container from "../layout/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ficha = () => {
  const params = useParams();
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async (id) => {
    const urlPeticion =
      "https://tecnosearch.herokuapp.com/api/profesionales/" + params.id;
    //console.log(urlPeticion);
    const options = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await fetch(urlPeticion, options);
      const res = await data.json();
      console.log(res);
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
      <br></br>
      {Object.keys(datos).length > 0 && (
        <div key={datos._id}>
          <div className="form-group" key={datos._id}>
            <h1>Datos del técnico</h1>
            <div className="form-group">
              <h4>Nombre: {datos.datos_personales.nombre_completo}</h4>
            </div>

            <div className="form-group" key={datos._id}>
              <h4>Sexo: {datos.datos_personales.sexo}</h4>
            </div>

            <div className="form-group" key={datos._id}>
              <h4>Telefono: {datos.datos_personales.telefono}</h4>
            </div>

            <div className="form-group" key={datos._id}>
              <h4>Correo electrónico: {datos.datos_personales.email}</h4>
            </div>
          </div>

          <div className="form-group" key={datos._id}>
            <h1>Información profesional</h1>
            <div className="form-group">
              {datos.info_profesional.certificaciones.map((certif) => (
                <div>
                  <h4>Certificaciones: {certif.certificaciones}</h4>
                </div>
              ))}
            </div>

            <div className="form-group" key={datos._id}>
              {datos.info_profesional.rubros.map((rub) => (
                <div>
                  <h4>Rubro: {rub.rubros}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group" key={datos._id}>
            <div className="form-group">
              <h4>
                Dias de atención: {datos.info_lugar_trabajo.dias_atencion}
              </h4>
            </div>

            <div className="form-group" key={datos._id}>
              <h4>
                Horario de atención: {datos.info_lugar_trabajo.horario_atencion}
              </h4>
            </div>

            <div className="form-group" key={datos._id}>
              <h4>Dirección: {datos.info_lugar_trabajo.direccion}</h4>
            </div>

            <div className="form-group">
              <h4>Número de Likes: {datos.info_profesional.likes}</h4>
              <button
                className="btn btn-info btn-xs"
                style={{ marginLeft: "10px" }}
              >
                <i className="glyphicon glyphicon-phone"></i> Tec
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ficha;
