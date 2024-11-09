// 1 - Importar datos tienda
import {tienda} from "./tienda.js";
// 2 - Importamos las funciones
import { renderizadoProductos } from "./funciones.js";

// 3 - Referenciar elemento contenedor de los productos con .getElementById..
const contenedorProductos = document.getElementById("carta-productos")

// 4 - Utilizar la función de renderizado
const productos = tienda.productos;

renderizadoProductos(productos,contenedorProductos);