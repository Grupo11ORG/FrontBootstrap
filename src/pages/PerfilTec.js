import React from "react";
import Container from "../layout/Container";
import TagInput from "../components/TagInput/TagInput";
import { useState } from "react";

const PerfilTec = () => {
  const [tags, setTags] = useState([]);
  return (
    <Container>
      <form className="container rounded bg-orange mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">Usuario</span>
              <span class="text-black-50">Informacion</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Nombre completo</label>
                  <input
                    id="nameCom"
                    name="nameCom"
                    type="text"
                    className="form-control"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Fecha de nacimiento</label>
                  <input
                    id="fechaNac"
                    name="fechaNac"
                    type="date"
                    className="form-control"
                    placeholder="EstoIgualNoSeVe Nose ParaQueLoMuestro"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">DNI</label>
                  <input
                    id="denei"
                    name="denei"
                    type="text"
                    className="form-control"
                    placeholder="Numero documento"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Sexo</label>
                  <select
                    id="nameCom"
                    name="nameCom"
                    type="text"
                    className="form-control"
                  >
                    <option selected disabled>
                      Seleccione una opcion
                    </option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="labels">Telefono</label>
                  <input
                    id="telef"
                    name="telef"
                    type="text"
                    className="form-control"
                    placeholder="Numero de telefono"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="labels">Certificaciones</label>
                    <input
                      id="certif"
                      name="certif"
                      type="text"
                      className="form-control"
                      placeholder="Describa sus certificaciones"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels"></label>
                    <input
                      className="form-control"
                      name="certifImg"
                      type="file"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Rubro</label>

                  <TagInput tags={tags} handle={setTags}/>
                  
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PerfilTec;
