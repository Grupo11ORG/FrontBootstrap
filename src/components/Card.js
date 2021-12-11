import { useEffect, useState } from "react";

const Card = () => {
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const data = await fetch(
        "https://tecnosearch.herokuapp.com/api/profesionales"
      );
      const res = await data.json();
      setDatos(res);
    } catch (error) {
      console.log("Hubo un error en la petición. " + error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <>
      <div className="form-group" style={{ marginTop: "60px" }}>
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Buscar" />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Buscar
            </button>
          </div>
        </div>
        {datos.map((item) => (
          <div
            class="card mb-3 border border-primary"
            style={{
              maxwidth: "540px",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <div className="card text-center">
              <div className="card-header">
                <h3>{item.datos_personales.nombre_completo}</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {item.info_profesional.certificaciones}
                </h5>
                <p className="card-text">{item.info_profesional.rubros}</p>
              </div>
              <div className="card-footer text-muted">
                <button
                  className="btn btn-primary btn-xs"
                  style={{ marginLeft: "60%" }}
                >
                  <i className="glyphicon glyphicon-plus"></i> ver más!{" "}
                </button>
                <button
                  class="btn btn-info btn-xs"
                  style={{ marginLeft: "10px" }}
                >
                  <i className="glyphicon glyphicon-phone"></i> Tec
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
