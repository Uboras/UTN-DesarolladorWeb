import React from "react";

 const Productos  = ({producto}) => {
    return ( 
        <div className="productos">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>SKU: {producto.sku}</p>
            <p>Cantidad disponible: {producto.cantidad}</p>
        </div>
     );
 }
  
 export default Productos ;