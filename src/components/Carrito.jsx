export default function Carrito({ productos, onEliminar, onVaciar }) {
  const total = productos.reduce((suma, producto) => suma + producto.precio, 0);

  return (
    <>
      <button type="button" className="btn btn-danger carrito-flotante"
        data-bs-toggle="offcanvas" data-bs-target="#panelCarrito" aria-controls="panelCarrito"
        aria-label={`Abrir carrito de compras: ${productos.length} productos`}>
        <span aria-hidden="true">Carrito </span>
        <span className="badge rounded-pill text-bg-light" aria-live="polite">{productos.length}</span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="panelCarrito"
        aria-labelledby="tituloCarrito">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="tituloCarrito">Carrito de compras</h2>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar carrito" />
        </div>
        <div className="offcanvas-body">
          {productos.length === 0 ? (
            <p className="alert alert-info" role="status">Tu carrito está vacío. Agrega un videojuego para comenzar.</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {productos.map((producto) => (
                  <li className="list-group-item item-carrito" key={producto.id}>
                    <div>
                      <strong>{producto.nombre}</strong>
                      <p className="mb-0">${producto.precio.toLocaleString('es-CL')}</p>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn-sm"
                      aria-label={`Eliminar ${producto.nombre} del carrito`} onClick={() => onEliminar(producto.id)}>
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn btn-outline-light mb-3" onClick={onVaciar}>Vaciar carrito</button>
            </>
          )}
          <p className="fw-bold fs-5" aria-live="polite">Total: <span>${total.toLocaleString('es-CL')}</span></p>
        </div>
      </div>
    </>
  );
}
