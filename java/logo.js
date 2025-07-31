window.addEventListener('scroll', function() {
    const logoImg = document.getElementById('logo-img');

    // Detectar si estamos en la raíz o en una subcarpeta
    const isRoot = location.pathname === "index.html" || location.pathname === "/";

    // Definir las rutas según la ubicación
    const blackLogo = isRoot ? "images/Logo/Grupo Dragon_ Logo Negro.png" : "../images/Logo/Grupo Dragon_ Logo Negro.png";
    const whiteLogo = isRoot ? "images/Logo/Grupo Dragon_ Logo Blanco.png" : "../images/Logo/Grupo Dragon_ Logo Blanco.png";

    if (window.scrollY > 50) {
        logoImg.src = blackLogo;
    } else {
        logoImg.src = whiteLogo;
    }
});
