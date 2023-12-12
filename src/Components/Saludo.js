import React, { useState } from 'react';

import '../Styles/Saludo.css'

const Saludo = () => {
  
  const [nombre, setNombre] = useState('');

  return (
    <div class="saludo-contenedor">
      <h1 class='saludo-titulo'>Saludo Dinámico:</h1>
      
      <input
        class="inputNombre"
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
      />
      {<h2 class='saludo-titulo2'>Hola, {nombre}!</h2>} 
    </div>
  );
};

export default Saludo;