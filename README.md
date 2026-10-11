# Camperos Games

Evaluación Final Transversal de Desarrollo Frontend I (PFY2201).
Alumno: Víctor Marambio.

Tienda de videojuegos desarrollada a partir del proyecto de la semana 8.
Utiliza HTML semántico, CSS, JavaScript, Bootstrap 5 y React con Vite.

## Instalación y ejecución

Requisitos: Node.js 22.12 o superior y npm.
Descomprime el proyecto y abre una terminal en la carpeta que contiene package.json.

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal. Detén el servidor con Ctrl+C.
Para compilar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Uso

- Inicio: muestra los videojuegos disponibles.
- Acción y Deportes: filtran el catálogo por categoría.
- Buscador: filtra por nombre; Ver todos limpia los filtros.
- Agregar al carrito: incorpora un juego una sola vez. El carrito lateral
  permite eliminar juegos, vaciar la lista y consultar el total en pesos chilenos.
- Gestionar catálogo: abre una ventana modal de Bootstrap sobre la tienda.
  Puedes cerrarla con la X, Cerrar gestión o Escape. Permite agregar un videojuego con nombre, categoría, precio,
  descripción y dirección de imagen, o eliminar uno existente.
  Al eliminarlo del catálogo también se elimina del carrito.
- Contacto: valida nombre, formato de correo y mensaje. Muestra los errores
  y una confirmación cuando los datos son correctos.

Los cambios del catálogo y del carrito se mantienen en el estado de React
hasta recargar la página. El formulario simula el envío: no envía correos
ni utiliza un servidor. No se implementan pagos ni autenticación.
Las portadas utilizan direcciones externas; si una falla se muestra un reemplazo.

## Estructura y funcionamiento

- index.html: documento HTML y elemento root.
- public/data/productos.json: arreglo de objetos con los datos iniciales.
- src/main.jsx: monta React e importa Bootstrap y CSS.
- src/App.jsx: carga los datos con fetch y useEffect; maneja con useState
  catálogo, carrito, búsqueda, categoría, carga y error. Pasa datos y funciones
  mediante props. filter selecciona los productos y map genera las tarjetas.
- src/components/Encabezado.jsx: encabezado y navegación responsive.
- src/components/ProductoCard.jsx: tarjeta reutilizable de un videojuego.
- src/components/Carrito.jsx: carrito lateral, contador y total.
- src/components/GestionCatalogo.jsx: formulario para agregar y lista para eliminar videojuegos.
- src/components/Contacto.jsx: formulario y validación de datos.
- src/styles.css: estilos personalizados y adaptación a tamaños de pantalla.
- vite.config.js: configuración de Vite y ruta para GitHub Pages.

React actualiza el DOM cuando cambia el estado. Se utilizan arreglos nuevos
con spread y filter para agregar o eliminar elementos sin modificar el estado directamente.
Las columnas de Bootstrap y Flexbox organizan la interfaz responsive.

## Publicación en GitHub Pages

La configuración mantiene el nombre de repositorio Camperos_Games.
Desde tu copia conectada al repositorio GitHub, ejecuta:

```bash
npm run deploy
```

En GitHub configura Settings > Pages > Deploy from a branch > gh-pages > / (root).
Si cambias el nombre del repositorio, ajusta base en vite.config.js.

## Comprobación antes de entregar

1. Confirmar que aparecen los seis videojuegos iniciales con nombre, precio y descripción.
2. Probar Acción, Deportes, búsqueda y una búsqueda sin resultados.
3. Agregar juegos al carrito, comprobar total, eliminar y vaciar.
4. Intentar agregar al catálogo campos vacíos y precio negativo: deben rechazarse.
5. Agregar un juego válido, buscarlo, agregarlo al carrito y eliminarlo del catálogo.
6. En Contacto probar campos vacíos, espacios, correo incorrecto y datos correctos.
7. Probar navegación y carrito en escritorio, tablet y móvil.
8. Repetir el recorrido en Chrome y Firefox y comprobar que no hay errores en consola.

## Entrega

Compartir el enlace del repositorio, el ZIP del proyecto y un video MP4 que
muestre el funcionamiento y explique el diseño y el código.
El ZIP no incluye node_modules ni dist: npm install instala las dependencias.
Registrar cambios reales en Git con mensajes claros; este ZIP no contiene el historial de GitHub.

## Validación realizada

La instalación con npm ci y la compilación con npm run build se completaron
correctamente. La revisión visual y las pruebas manuales en Chrome y Firefox
quedan pendientes y deben realizarse siguiendo el recorrido anterior.
