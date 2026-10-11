import { useState } from 'react';

export default function GestionCatalogo({ productos, onAgregar, onEliminar }) {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('accion');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [error, setError] = useState('');
  const [aviso, setAviso] = useState('');

  function agregarVideojuego(evento) {
    evento.preventDefault();
    setAviso('');
    if (!nombre.trim() || !descripcion.trim() || !imagen.trim() || !Number.isFinite(Number(precio)) || Number(precio) <= 0) {
      setError('Completa todos los campos e ingresa un precio mayor que cero.');
      return;
    }
    if (!/^https?:\/\/\S+$/i.test(imagen.trim())) {
      setError('La dirección de la imagen debe comenzar con http:// o https://.');
      return;
    }
    onAgregar({ nombre: nombre.trim(), categoria, precio: Number(precio), descripcion: descripcion.trim(), imagen: imagen.trim() });
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setImagen('');
    setError('');
    setAviso('Videojuego agregado al catálogo.');
  }

  return (
    <div>
      <p>Agrega o elimina videojuegos de la lista. Los cambios duran hasta recargar la página.</p>
      <form onSubmit={agregarVideojuego} noValidate>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="nombreJuego" className="form-label">Nombre del videojuego</label>
            <input id="nombreJuego" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="categoriaJuego" className="form-label">Categoría</label>
            <select id="categoriaJuego" className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="accion">Acción</option><option value="deportes">Deportes</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="precioJuego" className="form-label">Precio en pesos chilenos</label>
            <input id="precioJuego" type="number" min="1" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="imagenJuego" className="form-label">Dirección de la imagen</label>
            <input id="imagenJuego" type="url" className="form-control" placeholder="https://..." value={imagen} onChange={(e) => setImagen(e.target.value)} required />
          </div>
          <div className="col-12">
            <label htmlFor="descripcionJuego" className="form-label">Descripción</label>
            <textarea id="descripcionJuego" rows="2" className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
          </div>
        </div>
        {error && <p className="alert alert-danger mt-3" role="alert">{error}</p>}
        <button type="submit" className="btn btn-warning mt-3">Agregar videojuego</button>
      </form>
      {aviso && <p className="alert alert-success mt-3" role="status">{aviso}</p>}
      <h3 className="fs-5 mt-4">Videojuegos del catálogo ({productos.length})</h3>
      {productos.length === 0 && <p>No hay videojuegos en el catálogo.</p>}
      <ul className="list-group">
        {productos.map((producto) => (
          <li key={producto.id} className="list-group-item item-carrito">
            <strong>{producto.nombre}</strong>
            <button type="button" className="btn btn-outline-danger btn-sm" aria-label={`Eliminar ${producto.nombre} del catálogo`}
              onClick={() => { onEliminar(producto.id); setAviso(`${producto.nombre} eliminado del catálogo.`); }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
