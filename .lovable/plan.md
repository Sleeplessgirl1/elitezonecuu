## Objetivo

Que al enviar el formulario de contacto se abra WhatsApp (+52 614 515 4240) con el mensaje prellenado con todos los datos del formulario. También arreglar el error de build por el `@import` remoto en `styles.css`.

## Cambios

### 1. `src/components/elite/Sections.tsx` — Contact

Reemplazar el `onSubmit` actual (que solo dispara el toast y pierde los datos) por uno que:

- Lee los campos del `<form>` con `FormData`.
- Construye un texto tipo:
  ```
  Hola ELITE ZONE, quiero reservar 🎯

  Nombre: Juan
  WhatsApp: 614...
  Fecha: 2026-07-15
  Paquete: ÉLITE
  Jugadores: 10
  Lugar: Col. Centro
  Mensaje: ...
  ```
- Abre `https://wa.me/5216145154240?text=<encodeURIComponent(texto)>` en una nueva pestaña.
- Sigue llamando `onSubmit()` para mostrar el toast existente ("MENSAJE ENVIADO ▸ TE CONTACTAMOS PRONTO").

No se toca el diseño ni los campos.

### 2. Arreglar error de build — fuentes de Google

Actualmente `src/styles.css` línea 1 tiene:
```css
@import url("https://fonts.googleapis.com/css2?family=Rajdhani...");
```
Tailwind v4 / Lightning CSS intenta leer esa URL como archivo local y rompe el build.

- Quitar esa línea de `src/styles.css`.
- Añadir las fuentes vía `<link>` en el `head()` de `src/routes/__root.tsx` (preconnect + stylesheet a `fonts.googleapis.com`), que es el patrón correcto para TanStack Start + Tailwind v4.

Sin cambios en tipografías ni en el resto del CSS.
