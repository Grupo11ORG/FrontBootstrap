import * as yup from 'yup';

export const registerSchema = yup.object().shape( {
    nombre_apellido: yup.string().required(),
    dni: yup.number().required(),
    fecha_Nac:yup.number().required(),
    sexo:yup.string().required(),
    telefono: yup.string().required(),
    correo:yup.string().email().required(),
    username: yup.string().required(),
    password:yup.string().required(),
    conf_password: yup.string().required()
 });
