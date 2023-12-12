import '../Styles/menuLinkedin.css';

import React, { useState } from 'react';

const MyComponent = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="encabezado">
      <ul className="encabezado-imagen">
        <li>
          <img
            className="icon"
            src="https://campus.argentinaprograma.utn.edu.ar/pluginfile.php/1/core_admin/logocompact/300x300/1696052437/AP_UTN_Compacto_00.png"
            alt="UTN Argentina Programa"
          />
        </li>
      </ul>
      <ul className="encabezado-contactos">
        <li className="encabezado-contactos_titulo">Contactanos:</li>
        <li>
          <a href="mailto:correo@ejemplo.com" rel="icon">
            <img className="icon" src="../img/email.png" alt="icono mail" />
          </a>
        </li>
        <li>
          <a href="https://chat.whatsapp.com/JpZqFimIizS1uNsFPEgBzo" rel="icon">
            <img
              className="icon"
              src="../img/whatsapp.png"
              alt="Ícono de WhatsApp"
            />
          </a>
        </li>
        <li>
          
          <img className="icon" src="../img/linkedin.svg" alt="icono mail" onClick={toggleMenu} />
          <div id="menu-container" style={{ display: menuVisible ? 'block' : 'none' }}>
            <a href="https://www.linkedin.com/in/felix-sebasti%C3%A1n-olima-quinteros-43b51b230/">Felix Olima Quinteros</a>
            <a href="https://www.linkedin.com/in/hernan-manera-62312682/">Hernan Manera</a>
          
          </div>
        </li>
      </ul>
    </header>
  );
};

export default MyComponent;
