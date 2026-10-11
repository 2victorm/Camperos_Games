# Camperos Games

Proyecto de la Evaluación Final Transversal de Desarrollo Frontend I (PFY2201).

**Alumno:** Víctor Marambio.

Camperos Games es una tienda de videojuegos desarrollada a partir del proyecto de la semana 8. Permite consultar productos, buscar por nombre, filtrar por categoría y agregar videojuegos a un carrito. También incluye un formulario de contacto y una ventana para gestionar el catálogo.

## Tecnologías utilizadas

- HTML y CSS.
- JavaScript.
- Bootstrap 5.
- React.
- Vite.

## Instalación

Se necesita Node.js 22.12 o superior y npm.

Desde la carpeta del proyecto, instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

Abrir en el navegador la dirección que muestra la terminal. Para detener el servidor, presionar `Ctrl+C`.

## Funcionalidades

- Catálogo cargado desde un archivo JSON.
- Tarjetas con imagen, nombre, descripción y precio.
- Búsqueda de videojuegos por nombre.
- Filtros por las categorías Acción y Deportes.
- Carrito lateral con contador de productos y total en pesos chilenos.
- Opciones para eliminar productos del carrito o vaciarlo.
- Gestión del catálogo en una ventana modal para agregar y eliminar videojuegos.
- Formulario de contacto con validación de nombre, correo y mensaje.
- Diseño adaptable a escritorio, tablet y teléfono.

## Organización del proyecto

```text
public/
  data/
    productos.json
src/
  components/
    Carrito.jsx
    Contacto.jsx
    Encabezado.jsx
    GestionCatalogo.jsx
    ProductoCard.jsx
  App.jsx
  main.jsx
  styles.css
index.html
package.json
vite.config.js
```

- **App.jsx:** carga los productos y maneja el catálogo, los filtros y el carrito.
- **Encabezado.jsx:** muestra el encabezado y la navegación.
- **ProductoCard.jsx:** muestra la tarjeta de cada videojuego.
- **Carrito.jsx:** muestra los productos seleccionados y calcula el total.
- **GestionCatalogo.jsx:** permite agregar y eliminar videojuegos.
- **Contacto.jsx:** contiene el formulario y sus validaciones.
- **styles.css:** contiene los estilos personalizados.
- **productos.json:** contiene los datos iniciales de los videojuegos.

## Funcionamiento

Los productos se cargan con `fetch` dentro de `useEffect`. Se utiliza `useState` para manejar los datos y actualizar la página cuando el usuario realiza una acción.

Los componentes reciben información y funciones mediante props. La búsqueda y los filtros utilizan `filter`, y las tarjetas se generan con `map`.

Bootstrap se utiliza para las tarjetas, los formularios, la navegación, el carrito lateral y la ventana modal.

## Consideraciones

- El catálogo y el carrito se reinician al recargar la página.
- Cada videojuego se puede agregar una sola vez al carrito.
- Al eliminar un videojuego del catálogo, también se elimina del carrito.
- La gestión del catálogo es una demostración de una función administrativa y no tiene inicio de sesión.
- El formulario de contacto simula el envío y no envía correos reales.
- Las imágenes se cargan desde direcciones externas. Si una imagen falla, se muestra una portada alternativa.

## Versión de producción

Para compilar el proyecto:

```bash
npm run build
```

Para revisar la versión compilada:

```bash
npm run preview
```

## GitHub Pages

El proyecto está configurado para el repositorio `Camperos_Games`.

Para publicar:

```bash
npm run deploy
```

En la configuración de GitHub Pages se debe seleccionar la rama `gh-pages` y la carpeta raíz.
