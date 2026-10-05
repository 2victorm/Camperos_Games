import { useEffect, useState } from 'react';
import Encabezado from './components/Encabezado.jsx';
import ProductoCard from './components/ProductoCard.jsx';
import Carrito from './components/Carrito.jsx';

export default function App() {
  // App comparte el catálogo y el carrito con sus componentes mediante props.
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todos');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // Carga los productos desde el JSON al abrir la aplicación.
  useEffect(() => {
    let activo = true;

    fetch(`${import.meta.env.BASE_URL}data/productos.json`)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('Error al cargar productos');
        return respuesta.json();
      })
      .then((datos) => {
        if (activo) setProductos(datos);
      })
      .catch(() => {
        if (activo) setError('No fue posible cargar los productos. Recarga la página.');
      })
      .finally(() => {
        if (activo) setCargando(false);
      });

    // Evita actualizar un componente que ya se cerró.
    return () => { activo = false; };
  }, []);

  // Los arreglos de estado se reemplazan por nuevos arreglos, sin usar push.
  function agregarAlCarrito(producto) {
    setCarrito((actual) => {
      if (actual.some((item) => item.id === producto.id)) return actual;
      return [...actual, producto];
    });
  }

  function eliminarDelCarrito(id) {
    setCarrito((actual) => actual.filter((producto) => producto.id !== id));
  }

  function mostrarTodos() {
    setBusqueda('');
    setCategoria('todos');
  }

  // Se calculan desde el estado actual; no necesitan otro useEffect.
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase());
    const coincideCategoria = categoria === 'todos' || producto.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  return (
    <>
      <Encabezado categoria={categoria} onCategoria={setCategoria} onInicio={mostrarTodos} />
      <main>
        <section id="productos" aria-labelledby="tituloProductos">
          <h2 id="tituloProductos">Productos destacados</h2>
          <div className="buscador mb-4">
            <label htmlFor="campoBusqueda" className="form-label">Buscar videojuego</label>
            <div className="d-flex gap-2">
              <input
                id="campoBusqueda"
                className="form-control"
                type="search"
                placeholder="Escribe el nombre de un juego"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
              />
              <button type="button" className="btn btn-outline-warning" onClick={mostrarTodos}>
                Ver todos
              </button>
            </div>
          </div>
          {/* Cada condición muestra un contenido distinto en el catálogo. */}
          {cargando && <p className="alert alert-info" role="status">Cargando productos…</p>}
          {error && <p className="alert alert-danger" role="alert">{error}</p>}
          {!cargando && !error && productosFiltrados.length === 0 && (
            <p className="alert alert-warning" role="status">No se encontraron productos para esta búsqueda.</p>
          )}
          <div className="row g-4">
            {productosFiltrados.map((producto) => (
              <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                <ProductoCard
                  producto={producto}
                  enCarrito={carrito.some((item) => item.id === producto.id)}
                  onAgregar={agregarAlCarrito}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Carrito
        productos={carrito}
        onEliminar={eliminarDelCarrito}
        onVaciar={() => setCarrito([])}
      />
      <footer id="contacto">
        <p>Dirección: Avenida Vicuña Mackenna Oriente 6100, La Florida, Chile.</p>
      </footer>
    </>
  );
}
