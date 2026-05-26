# Google Sin IA

Extensión de Chrome que fuerza las búsquedas en Google a mostrar **únicamente resultados web clásicos**, evitando los resúmenes generados por inteligencia artificial (AI Overviews, AI Mode, etc.).

## ¿Qué hace?

Google rediseñó su página de resultados para mostrar primero respuestas generadas por IA. Esta extensión intercepta automáticamente cualquier búsqueda en Google y añade el parámetro `udm=14`, que lleva directamente a la pestaña de resultados web tradicionales.

- ✅ Elimina los "AI Overviews" de los resultados.
- ✅ Funciona en búsquedas desde la barra de direcciones, la página de Google y enlaces directos.
- ✅ No requiere configuración; funciona en segundo plano desde el primer momento.

## Instalación

1. Clona o descarga este repositorio.
2. Abre Chrome y navega a `chrome://extensions/`.
3. Activa el **Modo de desarrollador** (interruptor superior derecho).
4. Haz clic en **Cargar descomprimida**.
5. Selecciona la carpeta `google-no-ai-extension`.

¡Listo! A partir de ahora, todas tus búsquedas en Google se redirigirán automáticamente a resultados sin IA.

## Cómo funciona

La extensión utiliza el evento `chrome.tabs.onUpdated` para detectar cuando una pestaña navega a una URL de búsqueda de Google (`/search`). Si detecta que la URL no contiene el parámetro `udm=14`, lo añade automáticamente y redirige la pestaña.

El parámetro `udm=14` es un identificador interno de Google que corresponde a la pestaña **"Web"** (resultados clásicos), evitando la vista de IA.

### Ejemplo

- **URL original:** `https://www.google.com/search?q=ejemplo`
- **URL con la extensión:** `https://www.google.com/search?q=ejemplo&udm=14`

## Estructura del proyecto

```
google-no-ai-extension/
├── manifest.json     # Configuración de la extensión (Manifest V3)
├── background.js     # Lógica de redirección
└── README.md         # Este archivo
```

## Permisos

La extensión solicita únicamente los permisos mínimos necesarios:

- **`tabs`**: Para escuchar los cambios de URL en las pestañas y redirigir cuando corresponde.
- **`host_permissions` para `*://*.google.com/*`**: Para actuar únicamente en páginas de Google.

No se accede a tu historial, no se envían datos a servidores externos y no se ejecuta código en las páginas que visitas.

## Compatibilidad

- **Navegadores:** Chrome, Edge, Brave, Opera y cualquier navegador basado en Chromium que soporte Manifest V3.
- **Idiomas:** Funciona con todas las versiones regionales de Google (`google.com`, `google.com.ar`, `google.es`, etc.).

## Contribuir

¡Las contribuciones son bienvenidas! Si encuentras un bug, si Google cambia el funcionamiento de `udm=14`, o si tienes una idea para mejorar la extensión, abre un *issue* o envía un *pull request*.

## Licencia

MIT

---

*Hecho para mantener la búsqueda web simple y libre de ruido de IA.*
