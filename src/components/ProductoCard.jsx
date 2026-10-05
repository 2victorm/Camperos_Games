import { useState } from 'react';

export default function ProductoCard({ producto, enCarrito, onAgregar }) {
  const [imagenFallida, setImagenFallida] = useState(false);

  return (
    <article className="card producto h-100 p-3">
      {imagenFallida ? (
        <div className="portada-alternativa" role="img" aria-label={`Portada no disponible de ${producto.nombre}`}>
          <span aria-hidden="true">CG</span>
          <strong>{producto.nombre}</strong>
          <small>Portada no disponible</small>
        </div>
      ) : (
        <img src={producto.imagen} alt={`Portada del videojuego ${producto.nombre}`}
          className="card-img-top" onError={() => setImagenFallida(true)} />
      )}
      <h3 className="card-title">{producto.nombre}</h3>
      <p className="card-text">{producto.descripcion}</p>
      <p className="fw-bold fs-5">${producto.precio.toLocaleString('es-CL')}</p>
      {/* El botón cambia de texto, color y disponibilidad según el carrito. */}
      <button type="button" className={`btn ${enCarrito ? 'btn-success' : 'btn-warning'} mt-auto`}
        disabled={enCarrito} onClick={() => onAgregar(producto)}>
        {enCarrito ? '✓ En el carrito' : 'Agregar al carrito'}
      </button>
    </article>
  );
}
