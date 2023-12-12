import "../../Styles/Clase1.css";



import React, { useState } from 'react';

export default () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    tipoSeguro: 'basico',
    valorSeguro: 500, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleTipoSeguroChange = (e) => {
    const tipoSeguro = e.target.value;
    let valor = 0;

    // Calcular el valor del seguro en función del tipo seleccionado
    if (tipoSeguro === 'basico') {
      valor = 500;
    } else if (tipoSeguro === 'intermedio') {
      valor = 1000;
    } else if (tipoSeguro === 'premium') {
      valor = 1500;
    }

    // Actualizar el estado con el nuevo tipo de seguro y valor
    setFormulario({ ...formulario, tipoSeguro, valorSeguro: valor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Formulario enviado:', formulario);
  };

  return (
    <div>
       <section class="main-encabezado">
        <p>
          <span id="format-1">Seguro No Pagamos Cooperativa<br></br> una compañía
          de seguros que lleva 2 años en el mercado. Trabajamos con los esquemas
          tradicionales de venta.</span>
        </p>
        <p>
          <span id="format-2">¡Te llamamos, Asesoramos y estamos con vos!</span>
        </p>
      </section>
    
      <article className="main-formulario">
        <h1 className="main-formulario_titulo">Solicitud de Seguro</h1>
        <form id="formularioSeguro" onSubmit={handleSubmit}>
          <fieldset className="formularioSeguro-fielset">
            <legend class="formularioSeguro-legend">Datos Personales</legend>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required></input>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required></input>

            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required></input>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>

            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required></input>
            
          </fieldset>

          <fieldset className="formularioSeguro-fielset">
            <legend className="formularioSeguro-legend">Tipo de Seguro</legend>
            <label htmlFor="tipoSeguro">Tipo de seguro:</label>
            <select
              id="tipoSeguro"
              name="tipoSeguro"
              value={formulario.tipoSeguro}
              onChange={handleTipoSeguroChange}
            >
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="premium">Premium</option>
            </select>
            <div id="valorSeguro">Valor del seguro: ${formulario.valorSeguro}</div>
          </fieldset>

          <input type="submit" value="Enviar"></input>
        </form>
      </article>

      <aside></aside>
    </div>
  );
};

