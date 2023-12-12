import React from "react";
import ReactImage from '../../React.png';
import '../../Styles/Home.css'

export default () => {
  return (
    <div className="home">
      <h1 className="home-titulo">Bienvenidos</h1>
      <img className="home-imagen" src={ReactImage} alt="React logo" />
    </div>
  );
};
