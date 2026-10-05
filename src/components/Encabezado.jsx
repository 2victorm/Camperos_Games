import { useState } from 'react';

export default function Encabezado({ categoria, onCategoria, onInicio }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function seleccionarCategoria(valor) {
    onCategoria(valor);
    setMenuAbierto(false);
  }

  function volverAlInicio() {
    onInicio();
    setMenuAbierto(false);
  }

  return (
    <>
      <header id="inicio">
        <h1>Camperos Games</h1>
        <p>Encuentra lo que buscas en videojuegos para todas las plataformas.</p>
      </header>
      <nav className="navbar navbar-expand-md navbar-dark menu-principal" aria-label="Navegación principal">
        <div className="container">
          <a className="navbar-brand" href="#inicio" onClick={volverAlInicio}>Camperos Games</a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="menuNavegacion"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="menuNavegacion">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio" onClick={volverAlInicio}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${categoria === 'accion' ? 'active' : ''}`} href="#productos"
                  onClick={() => seleccionarCategoria('accion')}>Acción</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${categoria === 'deportes' ? 'active' : ''}`} href="#productos"
                  onClick={() => seleccionarCategoria('deportes')}>Deportes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
