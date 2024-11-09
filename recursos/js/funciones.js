export function renderizadoProductos(arregloProductos, contenedorHTML) {
    // Recorrer el arreglo y extraer los datos

    let contenidoHTML = '' //creo el contenido que tiene q haber

    arregloProductos.forEach(producto => { //pego el formato del article
        contenidoHTML +=` 
            <article class="carta__producto">
                        <div>
                            <img src="${producto.imagen}" alt="imagen del cafe ${producto.nombre}">
                            <h3>${producto.nombre}</h3>
                        </div>
                        <data value="${producto.precio}" type="number">$ ${producto.precio}</data>

                    </article>
        
        `
    })
    contenedorHTML.innerHTML = contenidoHTML //meto el contenido en el contenedor general

}
