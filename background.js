chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Solo actuar cuando la URL cambia y la página está cargando
  if (!changeInfo.url) return;

  try {
    const url = new URL(changeInfo.url);

    // Verificar que sea un dominio de Google (ej: www.google.com, google.com, etc.)
    const isGoogle = /^(?:[a-z0-9-]+\.)*google\.[a-z\.]+$/i.test(url.hostname);
    if (!isGoogle) return;

    // Verificar que sea una página de búsqueda
    if (!url.pathname.startsWith('/search')) return;

    // Si ya tiene udm=14, no hacer nada (evita bucles infinitos)
    if (url.searchParams.get('udm') === '14') return;

    // Añadir udm=14 para forzar la pestaña de resultados web clásicos
    url.searchParams.set('udm', '14');

    // Redirigir la pestaña a la URL modificada
    chrome.tabs.update(tabId, { url: url.toString() });
  } catch (e) {
    // Ignorar URLs malformadas
  }
});
