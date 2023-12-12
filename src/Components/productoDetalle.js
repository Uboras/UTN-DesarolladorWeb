import React from "react";
import Productos from "./productos";


const ProductoDetalle  = () => {
    const productoData = {
        nombre: 'Producto de ejemplo',
        descripcion: 'Descripción del producto de ejemplo',
        precio: 99.99,
        sku: '123456',
        cantidad: 50,
      };
    return ( 
        <div className="contenedor-producto">
        <div className="producto-detalle">
        <h1>Detalle del Producto</h1>
        <Productos producto={productoData} />
      </div>
      </div>
     );
}
 
export default ProductoDetalle;