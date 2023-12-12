import { useState } from "react";

import '../Styles/registro.css'

//estado del formulario
const Registro = () => {
  const [formDatos, setFormDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmarPassword: ""
  });

  //modificacion del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatos({ ...formDatos, [name]: value });
  };
  // envio de datos a un base de datos.. puede ser por http 0 directamente con sql
  const enviarDatosAlServidor = async (datos) => {
    try {
      alert("Datos enviados al servidor:", datos);
    } catch (error) {
      console.error("Error al enviar datos al servidor:", error);
    }
  };

  // se verifican los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //encaso de error y un campo este vacio
    if (
      !formDatos.nombre ||
      !formDatos.apellido ||
      !formDatos.email ||
      !formDatos.password ||
      !formDatos.confirmarPassword
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    //En caso que las contraseñas no sean correctas
    if (formDatos.password !== formDatos.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDatos.email)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }
    // Validación de teléfono solo 10 numeros
    if (formDatos.telefono && formDatos.telefono.length !== 10) {
      alert("Ingrese un número de teléfono válido");
      return;
    }

    enviarDatosAlServidor(formDatos);
  };

  return (
    <div className="registro-container">
      <h2 className="registro-titulo"> Registro</h2>
      <form className="form" onSubmit={handleSubmit}  autocomplete="off">
        <fieldset className="form-fieldset">
          <legend className="form-fieldset_legend">Información de Contacto</legend>
          <input
          className="inputReg"
            placeholder="Nombre:"
            type="text"
            name="nombre"
            value={formDatos.nombre}
            onChange={handleChange}
            required
          />

          <br />

          <input
          className="inputReg"
            placeholder="Apellido:"
            type="text"
            name="apellido"
            value={formDatos.apellido}
            onChange={handleChange}
            required
          />

          <br />

          <input
          className="inputReg"
            placeholder="Teléfono:"
            type="tel"
            name="telefono"
            max={10}
            value={formDatos.telefono}
            onChange={handleChange}
            required
          />
          <br/>
        </fieldset>
        <fieldset className="form-fieldset">
          <legend className="form-fieldset_legend" >Información de Cuenta</legend>

          <input
          className="inputReg"
            placeholder="Mail:"
            type="email"
            name="email"
            value={formDatos.email}
            onChange={handleChange}
            required
          />
          <br />

          <input
          className="inputReg"
            placeholder="Contraseña:"
            type="password"
            name="password"
            value={formDatos.password}
            onChange={handleChange}
            required
          />
           <input
           className="inputReg"
            placeholder="Contraseña:"
            type="password"
            name="confirmarPassword"
            value={formDatos.confirmarPassword}
            onChange={handleChange}
            
          />

        </fieldset>
        <button className="buttonReg" type="submit">Registrarse</button>
      </form>


     
    </div>
  );
};

export default Registro;

