
  const toggleMenuIndex = () => {
    const navigation = document.querySelector(".navigation");
    const burgerMenu = document.getElementById("menu-icon-index");
    const src = burgerMenu.getAttribute("src");

    const abrirIcon = "images/abrir.svg";
    const cerrarIcon = "images/cerrar.svg";

    const isBurger = src.includes("abrir.svg");
    const iconName = isBurger ? cerrarIcon : abrirIcon;

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
