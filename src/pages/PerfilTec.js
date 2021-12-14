import React from "react";
import Container from "../layout/Container";
import TagInput from "../components/TagInput/TagInput";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const initialForm = {
  datos_personales: {
    nombre_completo: "",
    fecha_nacimiento: "",
    dni: "",
    sexo: "",
    telefono: "",
    email: "",
    es_profesional: true,
  },
  info_profesional: {
    certificaciones: "",
    img_certif: "",
    rubros: "",
  },
  info_lugar_trabajo: {
    dias_atencion: "",
    horario_atencion: "",
    direccion: "",
    // marcador: {
    //   latitud: "",
    //   longitud: "",
    // },
  },
};

const PerfilTec = () => {
  const valRegTec = Yup.object().shape({
    nombre_completo: Yup.string()
      .required("Por favor ingrese el nombre")
      .matches(/^[aA-zZ\s]+$/, "Solo puede ingresar letras"),
  });
  const [form, setForm] = useState(initialForm);
  const [mostrarMensaje, setMostrarMensaje] = useState(null);
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(valRegTec) });

  const registrarnuevoTec = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(form),
      redirect: "follow",
    };

    fetch("https://tecnosearch.herokuapp.com/api/profesionales", options)
      .then((res) => res.json())
      .then(
        (res) => {
          if (!res.errores) {
            console.log(res);
            setMostrarMensaje({
              message: "Usuario agregado correctamente",
              style: "alert alert-success",
            });

            setTimeout(() => {
              setMostrarMensaje(null);
              history.push("/home");
            }, 3000);
          } else {
            setMostrarMensaje({
              message: "El usuario ya existe",
              style: "alert alert-danger",
            });

            setTimeout(() => {
              setMostrarMensaje(null);
            }, 3000);
          }
        },
        (errors) => {
          console.log(errors);
        }
      );

    // console.log(options);
  };


  return (
    <Container>
      <form
        className="container rounded bg-orange mt-5 mb-5"
        onSubmit={handleSubmit(registrarnuevoTec)}
      >
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
          <div className="col-md-9 border-right">
            <div className="p-3" style={{ marginTop: "8%" }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Informacion personal</h4>
                {mostrarMensaje != null ? (
                  <p className={mostrarMensaje.style}>
                    {mostrarMensaje.message}
                  </p>
                ) : null}
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Nombre completo</label>
                  <input
                    onChange={handleChange}
                    id="nombre_completo"
                    name="nombre_completo"
                    type="text"
                    placeholder="Nombre Completo"
                    {...register("nombre_completo")}
                    className={`form-control ${
                      errors.nombre_completo ? "is-invalid" : ""
                    }`}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Fecha de nacimiento</label>
                  <input
                    onChange={handleChange}
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    type="date"
                    className="form-control"
                    placeholder="EstoIgualNoSeVe Nose ParaQueLoMuestro"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">DNI</label>
                  <input
                    onChange={handleChange}
                    id="dni"
                    name="dni"
                    type="text"
                    className="form-control"
                    placeholder="Numero documento"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Sexo</label>
                  <select
                    id="sexo"
                    name="sexo"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    id="telefono"
                    name="telefono"
                    type="text"
                    className="form-control"
                    placeholder="Numero de telefono"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="labels">Certificaciones</label>
                    <input
                      onChange={handleChange}
                      id="certificaciones"
                      name="certificaciones"
                      type="text"
                      className="form-control"
                      placeholder="Describa sus certificaciones"
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <label className="labels"></label>
                    <input
                      id="img_certif"
                      className="form-control"
                      name="img_certif"
                      type="file"
                    />
                  </div> */}
                </div>
                <div className="col-md-12">
                  <label className="labels">Rubro</label>
                  <TagInput
                    id="rubros"
                    name="rubros"
                    tags={tags}
                    handle={setTags}
                  />
                </div>
              </div>
              <div className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Datos del lugar de trabajo</h4>
                </div>
                <div className="form-control">
                  <div class="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="lunes"
                      id="dias_atencion"
                      name="dias_atencion"
                    />
                    <label>Lunes</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="martes"
                      id="dias_atencion"
                      name="dias_atencion"
                    />
                    <label>Martes</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="miercoles"
                      id="dias_atencion"
                      name="dias_atencion"
                    />
                    <label>Miercoles</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="jueves"
                      name="dias_atencion"
                      id="dias_atencion"
                    />
                    <label>Jueves</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="viernes"
                      name="dias_atencion"
                      id="dias_atencion"
                    />
                    <label>Viernes</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="sabado"
                      id="dias_atencion"
                      name="dias_atencion"
                    />
                    <label>Sabado</label>
                  </div>
                  <div className="form-check">
                    <input
                      onChange={handleChange}
                      class="form-check-input"
                      type="checkbox"
                      value="domingo"
                      name="dias_atencion"
                      id="dias_atencion"
                    />
                    <label>Domingo</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <label>Horario de atencion</label>
                  <input
                    onChange={handleChange}
                    id=""
                    name=""
                    type="text"
                    className="form-control"
                    placeholder="Horario de atencion"
                  />
                </div>
                <div className="col-md-12">
                  <label>Direccion</label>
                  <input
                    onChange={handleChange}
                    id="horario_atencion"
                    name="horario_atencion"
                    type="text"
                    className="form-control"
                    placeholder="Direccion"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="submit"
                  onClick={handleSubmit(registrarnuevoTec)}
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
