const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  // Detectar si estamos en la raíz o en una subcarpeta
  const isRoot = location.pathname === "/" || location.pathname === "/index.html";

  // Rutas según ubicación
  const burgerPath = isRoot ? "images/burger-menu.svg" : "../images/burger-menu.svg";
  const closePath = isRoot ? "images/close.svg" : "../images/close.svg";

  // Verificamos si está el ícono de burger o el de close
  const isBurger = src.includes("burger-menu.svg");
  const iconName = isBurger ? closePath : burgerPath;

  // Cambiar imagen
  burgerMenu.setAttribute("src", iconName);

  // Animación del menú
  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
  }
};
