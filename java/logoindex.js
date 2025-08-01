
  window.addEventListener('scroll', function() {
    const logoImg = document.getElementById('logo-img-index');

    if (!logoImg) return; // seguridad por si no existe

    const blackLogo = "images/Logo/Logonegro.png";
    const whiteLogo = "images/Logo/Logoblanco.png";

    logoImg.src = window.scrollY > 50 ? blackLogo : whiteLogo;
  });

