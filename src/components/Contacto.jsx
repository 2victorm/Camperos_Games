import { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(evento) {
    evento.preventDefault();
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = 'Ingresa tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nuevosErrores.email = 'Ingresa un correo válido.';
    }
    if (!mensaje.trim()) nuevosErrores.mensaje = 'Escribe un mensaje.';
    setErrores(nuevosErrores);
    setEnviado(false);
    if (Object.keys(nuevosErrores).length === 0) {
      // Este proyecto frontend simula el envío; no envía correos.
      setEnviado(true);
      setNombre('');
      setEmail('');
      setMensaje('');
    }
  }

  return (
    <section id="contacto" className="seccion-formulario" aria-labelledby="tituloContacto">
      <h2 id="tituloContacto">Contacto</h2>
      <p>Completa el formulario para comunicarte con la tienda.</p>
      <p>El envío es una simulación para esta actividad.</p>
      <form onSubmit={enviarFormulario} noValidate>
        <div className="mb-3">
          <label htmlFor="nombreContacto" className="form-label">Nombre</label>
          <input id="nombreContacto" className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
            value={nombre} onChange={(e) => { setNombre(e.target.value); setEnviado(false); }}
            autoComplete="name" required aria-describedby="errorNombre" aria-invalid={Boolean(errores.nombre)} />
          <div id="errorNombre" className="invalid-feedback">{errores.nombre}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="emailContacto" className="form-label">Correo electrónico</label>
          <input id="emailContacto" type="email" className={`form-control ${errores.email ? 'is-invalid' : ''}`}
            value={email} onChange={(e) => { setEmail(e.target.value); setEnviado(false); }}
            autoComplete="email" required aria-describedby="errorEmail" aria-invalid={Boolean(errores.email)} />
          <div id="errorEmail" className="invalid-feedback">{errores.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="mensajeContacto" className="form-label">Mensaje</label>
          <textarea id="mensajeContacto" rows="4" className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
            value={mensaje} onChange={(e) => { setMensaje(e.target.value); setEnviado(false); }}
            required aria-describedby="errorMensaje" aria-invalid={Boolean(errores.mensaje)} />
          <div id="errorMensaje" className="invalid-feedback">{errores.mensaje}</div>
        </div>
        <button className="btn btn-warning" type="submit">Enviar mensaje</button>
        {enviado && <p className="alert alert-success mt-3" role="status">Datos validados correctamente. Envío simulado completado.</p>}
      </form>
    </section>
  );
}
