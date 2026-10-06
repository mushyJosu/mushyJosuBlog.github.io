// <-- Seleccionamos elementos interactivos del DOM -->
const btnToggleTheme = document.querySelector('#toggle-theme');
const iconTheme = document.querySelector('#icon-theme');

// <-- updateThemeIcon: Actualiza el icono de luna a sol y viceversa -->
function updateThemeIcon() {
  const isLight = document.body.classList.contains('is-light-mode');
  iconTheme.src = isLight ? 'icon/solIcon.png' : 'icon/lunaIcon.png';
}

// <-- Verificamos el estado en el almacenamiento local del navegador -->
if (localStorage.getItem('theme-mode') === 'is-light-mode') {
  document.body.classList.add('is-light-mode');
}
updateThemeIcon();

// <-- toggle: Alterna la clase de modo claro y guarda la preferencia -->
btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('is-light-mode');
  localStorage.setItem('theme-mode', document.body.classList.contains('is-light-mode') ? 'is-light-mode' : 'is-dark-mode');
  updateThemeIcon();
});

// <-- IntersectionObserver: Resalta la sección de la tabla de contenido que se está leyendo -->
const linksTableContents = document.querySelectorAll('.table-contents a');
if (linksTableContents.length) {
  const observerContents = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        linksTableContents.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '0px 0px -70% 0px' });

  linksTableContents.forEach((a) => {
    const targetSection = document.querySelector(a.getAttribute('href'));
    if (targetSection) observerContents.observe(targetSection);
  });
}

const btnMenuMobile = document.getElementById('btn-menu-mobile'); // Menú hamburguesa (afuera)
const btnCloseMenu = document.getElementById('btn-close-menu');   // Botón X (adentro)
const sidebar = document.querySelector('.sidebar');

// Abrir el menú
if (btnMenuMobile && sidebar) {
  btnMenuMobile.addEventListener('click', () => {
    sidebar.classList.add('is-active');
  });
}

// Cerrar el menú con la "X"
if (btnCloseMenu && sidebar) {
  btnCloseMenu.addEventListener('click', () => {
    sidebar.classList.remove('is-active');
  });
}

