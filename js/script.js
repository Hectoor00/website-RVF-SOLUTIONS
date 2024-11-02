document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navWrapper = document.querySelector('.nav-wrapper');
    const video = document.getElementById('background-video');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navWrapper.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navWrapper.classList.remove('active');
        });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navWrapper.contains(event.target) || mobileMenu.contains(event.target);
        if (!isClickInsideNavbar && navWrapper.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navWrapper.classList.remove('active');
        }
    });

    // Función para ajustar el tamaño del video
    function resizeVideo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = 16 / 9;

        if (width / height > aspectRatio) {
            video.style.width = width + 'px';
            video.style.height = 'auto';
        } else {
            video.style.width = 'auto';
            video.style.height = height + 'px';
        }
    }

    // Ajustar el tamaño del video al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('load', resizeVideo);
    window.addEventListener('resize', resizeVideo);
});