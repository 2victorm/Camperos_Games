# Camperos Games

Versión simple de la tienda de videojuegos en React para la Semana 8.

## Ejecutar

Requiere Node.js 22.12 o superior y npm. Abre una terminal en esta carpeta:

```bash
npm install
npm run dev
```

Abre la dirección que indica la terminal. Para detener: Ctrl+C.

## Funciones

- Catálogo cargado desde JSON con `useEffect`.
- Estados del catálogo, carrito y controles con `useState`.
- Búsqueda por nombre y filtros por categoría.
- Agregar, eliminar y vaciar productos del carrito.
- Contador, total y mensajes condicionales.
- Diseño responsivo con Bootstrap y carrito a la derecha.

Cada videojuego se agrega una sola vez. El carrito se reinicia al recargar.
Las portadas usan las URLs de la semana 6 y muestran un reemplazo si fallan.

## Publicar

Desde el repositorio Git conectado a GitHub:

```bash
npm run deploy
```

Este comando compila y publica `dist` en `gh-pages`. En GitHub, configura
Settings → Pages → Deploy from a branch → gh-pages → / (root).

La base está preparada para el repositorio `Camperos_Games`.

## Guías

- [Explicación del código](docs/EXPLICACION.md)
- [Subir con ramas y publicar](docs/GITHUB.md)
- [Pruebas y capturas de entrega](docs/ENTREGA.md)

**Autor del proyecto:** Víctor Marambio.
