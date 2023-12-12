import React, { useState } from "react";

import "../../Styles/Clase2.css";

export default () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    const result = parseFloat(numero1) + parseFloat(numero2);
    setResultado(result);
  };

  const restar = () => {
    const result = parseFloat(numero1) - parseFloat(numero2);
    setResultado(result);
  };

  const multiplicar = () => {
    const result = parseFloat(numero1) * parseFloat(numero2);
    setResultado(result);
  };

  const dividir = () => {
    const num2 = parseFloat(numero2);
    if (num2 === 0) {
      setResultado("Error: División por cero");
    } else {
      const result = parseFloat(numero1) / num2;
      setResultado(result);
    }
  };
  return (
    <div>
      <main>
        <div class="ejercicio1-01">
          <h2 class="ejercicio1-01_h2"> Respuesta de la pregunta 1</h2>
          <p class="ejercicio1-01_p1">
            El tercer parametro que recibe la funcion suma es una funcion, que
            sera llamanda nuevamente (callback) en um momento posterior
          </p>
          <p class="ejercicio1-01_p2">
            Las funciones de devolución de llamada son una parte esencial de la
            programación en JavaScript y son especialmente útiles en situaciones
            asincrónicas o cuando se necesita controlar el flujo de un programa.
            Ayudan a garantizar que las operaciones se realicen en el momento
            adecuado y permiten un código más flexible y modular.
          </p>
          <h2 class="ejercicio1-01_h2">
            El resultado de la suma es : <span id="resultado1"></span>{" "}
          </h2>
          <script src="ejercicio2.js"></script>
        </div>
        <section class="ejercicio1">
          <div class="ejercicio1-parrafo">
            <h1 class="ejercicio1-parrafo_titulo"> Ejercicio 1</h1>
          </div>
          <div class="ejercicio1-imagenes">
            <img
              class="ejercicio1-imagenes_imagen"
              src="./img/1.jpeg"
              alt="foto 1 ejemplo realizado"
            />
            <img
              class="ejercicio1-imagenes_imagen"
              src="./img/2.jpeg"
              alt="foto 2 ejemplo realizado"
            />
          </div>
        </section>
        <section className="ejecicio2">
          <div className="calculadora">
            <h2 className="calculadora-titulo">Calculadora Básica</h2>
            <div className="calculadora-inputs">
              <input
                className="input"
                type="text"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                placeholder="Ingrese el primer número"
              />
              <input
                className="input"
                type="text"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder="Ingrese el segundo número"
              />
            </div>
            <div className="calculadora-botones">
              <button className="button" onClick={sumar}>
                Suma
              </button>
              <button className="button" onClick={restar}>
                Resta
              </button>
              <button className="button" onClick={multiplicar}>
                Multiplicación
              </button>
              <button className="button" onClick={dividir}>
                División
              </button>
            </div>
            <div className="calculadora-resultados">
              <h1 className="calculadora-resultados_titulo">
                Resultado: <span id="resultado">{resultado}</span>
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
