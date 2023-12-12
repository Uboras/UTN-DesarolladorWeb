import '../Styles/ej5.css';

import { useState } from 'react';



export default ()=>{
  
  const tiposDeLetra = [
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Georgia, serif',
    'Palatino Linotype, Book Antiqua, Palatino, serif',
    'Verdana, Geneva, sans-serif',
    'Impact, Charcoal, sans-serif',
    'Lucida Sans Unicode, Lucida Grande, sans-serif',
    'Trebuchet MS, Helvetica, sans-serif',
  ];
  
  // Uso aleatorio de un tipo de letra y color
  const randomColor =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const randomColorType =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const tipoDeLetraAleatorio = tiposDeLetra[Math.floor(Math.random() * tiposDeLetra.length)];
  
  const nuevaFuente = {
    backgroundColor: `${randomColorType}`,
    color: `${randomColor}`, 
    fontFamily: `${tipoDeLetraAleatorio}`,
  };
  //useState con fuente inicial
  const [style, setStyle] = useState({
      });
  
  //definir nueva fuente + arrow function para setear style
  const cambiarFuente = () => {
  setStyle(nuevaFuente);
   
  };

//parrafo + button con event eventListener 'onClick'
  return (
    <div class="ejecicio5">
      <h3 style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <button onClick={cambiarFuente}>Cambiar Fuente</button>
      <div className='ejericio5-parrafos'>
<p>Tipo de Letra: {style.fontFamily}</p>
<p>color de Letra: {style.color}</p>
<p>color de fondo: {style.backgroundColor}</p>
    </div>
    </div>
  );
}

