window.addEventListener('scroll', function() {
    const logoImg = document.getElementById('logo-img');
    if (window.scrollY > 50) {  // Ajusta este valor según el momento en que quieras que se cambie el logo
        logoImg.src = '../images/Logo/Grupo Dragon_ Logo Negro.png'; // Ruta de la imagen negra
    } else {
        logoImg.src = '../images/Logo/Grupo Dragon_ Logo Blanco.png'; // Ruta de la imagen blanca
    }
});

