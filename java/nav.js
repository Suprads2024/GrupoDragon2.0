const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  // Detectar si estamos en la raíz o en una subcarpeta
  const isRoot = location.pathname === "/index.html" || location.pathname === "/";

  const burgerPath = isRoot ? "images/burger-menu.svg" : "../images/burger-menu.svg";
  const closePath = isRoot ? "images/close.svg" : "../images/close.svg";

  const isBurger = src === burgerPath;
  const iconName = isBurger ? closePath : burgerPath;

  burgerMenu.setAttribute("src", iconName);

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
