import React from "react";
import '../Styles/footer.css'

export default () => {
  return (
    <footer className="footer">
      <section className="grupo">
        <div className="footer-titulo">Grupo G</div>
        <ul className="lista-grupo">
          <li className="lista-grupo_alumno">MAURO RAUL BATISTELLI</li>
          <li className="lista-grupo_alumno">LAURA ALARCÓN</li>
          <li className="lista-grupo_alumno">CELESTE BLESTCHERCELESTE</li>
          <li className="lista-grupo_alumno">ROMINA ALEJANDRA DÍAZ SUÁREZ</li>
        </ul>
        <ul className="lista-grupo">
          <li className="lista-grupo_alumno">MARTÍN ALEJANDRO LIBONATI</li>
          <li className="lista-grupo_alumno">HERNÁN MANERA</li>
          <li className="lista-grupo_alumno">MARCOS MIRÓN</li>
        </ul>
        <ul className="lista-grupo">
          <li className="lista-grupo_alumno">ZARINA ROCÍO RICO</li>
          <li className="lista-grupo_alumno">OLIMA QUINTEROS FELIX SEBASTIAN</li>
          <li className="lista-grupo_alumno">CINTIA SUSANA YACUK</li>
        </ul>
      </section>
    </footer>
  );
};
