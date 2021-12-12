import Container from "../layout/Container";
import * as Yup from "yup";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const initialForm = {
  email: "",
  password: "",
  rol: "comun",
  username: "",
};

const Register = () => {
  const validationRegister = Yup.object().shape({
    username: Yup.string()
    .required("El Username es requerido")
    .min(8, "El Username debe contener mas de 8 caracteres")
    .max(15, "El Username no debe exceder los 15 caracteres")
    .matches(/^[aA-zZ\s]+$/, "Solo se admiten caracteres"),
    email: Yup.string()
      .required("El Email es requerido")
      .email("El formato del Email es invalido"),
    password: Yup.string()
      .required("El Password es requerido")
      .max(15, "El Password no debe exceder los 15 caracteres")
      .min(8, "La contraseña debe tener mas de 8 caracteres"),
    confirmPassword: Yup.string()
      .required("La Confirmación de la Contraseña es requerida")
      .oneOf([Yup.ref("password"), null], "Las Contraseñas deben ser iguales"),
  });
  const [form, setForm] = useState(initialForm);
  const history = useHistory();
  const [mostrarMensaje, setMostrarMensaje] = useState(null);

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
  } = useForm({ resolver: yupResolver(validationRegister) });

  const registrarnuevoUsuario = async () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(form),
      redirect: "follow",
    };

    fetch("https://tecnosearch.herokuapp.com/api/register", options)
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
              history.push("/login");
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
      <br></br>
      <br></br>
      <br></br>
      <div>
        <form
          onSubmit={handleSubmit(registrarnuevoUsuario)}
          className="border shadow-lg bg-white rounded"
          style={{
            marginLeft: "25%",
            marginRight: "25%",
            paddingLeft: "60px",
            paddingRight: "60px",
            paddingTop: "20px",
            paddingBottom: "20px",
            height:"70%",
          }}
        >
          <h1 style={{ textAlign: "center" }}>DESEO REGISTRARME</h1>
          {mostrarMensaje != null ? (
            <p className={mostrarMensaje.style}>{mostrarMensaje.message}</p>
          ) : null}
          <div className="form-floating my-3">
            <input
              name="email"
              type="email"
              id="email"
              placeholder="name@example.com"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email</label>
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-floating my-3">
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Nombre de Usuario"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Nombre de Usuario</label>
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className="form-floating my-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Contraseña</label>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="form-floating my-3">
            <input
              type="password"
              id="passwordConfirm"
              placeholder="Confirmar Password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="floatingPassword">Confirmar Contraseña</label>
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className="d-grid gap-2 d-md-bloc mx-auto">
            <button onClick={handleSubmit(registrarnuevoUsuario)} className="btn btn-primary btn-sm" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
