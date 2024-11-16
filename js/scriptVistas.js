// spinner
window.addEventListener('load', function() {
    // Oculta el spinner cuando la página termina de cargar
    document.getElementById('spinner').style.display = 'none';
});

// Función para agregar el menú y el footer en cada página del sitio web
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el menú
    fetch("../include/menuVistas.html")  // Ajuste de ruta para acceder desde 'vistas'
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Funcionalidad del menú responsivo
            const mobileMenu = document.getElementById("mobile-menu");
            const navWrapper = document.querySelector(".nav-wrapper");

            if (mobileMenu && navWrapper) {
                mobileMenu.addEventListener("click", function() {
                    mobileMenu.classList.toggle("active");
                    navWrapper.classList.toggle("active");
                });

                // Cerrar el menú al hacer clic en un enlace
                document.querySelectorAll(".nav-link").forEach(link => {
                    link.addEventListener("click", () => {
                        mobileMenu.classList.remove("active");
                        navWrapper.classList.remove("active");
                    });
                });

                // Cerrar el menú si se hace clic fuera de él
                document.addEventListener("click", function(event) {
                    const isClickInsideNavbar = navWrapper.contains(event.target) || mobileMenu.contains(event.target);
                    if (!isClickInsideNavbar && navWrapper.classList.contains("active")) {
                        mobileMenu.classList.remove("active");
                        navWrapper.classList.remove("active");
                    }
                });
            }
        })
        .catch(error => console.error("Error al cargar el menú:", error));

    // Cargar el footer
    fetch("../include/footerVistas.html")  // Ajuste de ruta para acceder desde 'vistas'
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el footer:", error));

    // Ajustar el tamaño del video de fondo
    const video = document.getElementById("background-video");
    function resizeVideo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = 16 / 9;

        if (width / height > aspectRatio) {
            video.style.width = width + "px";
            video.style.height = "auto";
        } else {
            video.style.width = "auto";
            video.style.height = height + "px";
        }
    }

    // Ajustar el tamaño del video al cargar y al cambiar el tamaño de la ventana
    window.addEventListener("load", resizeVideo);
    window.addEventListener("resize", resizeVideo);
});
