let menuDrop,
  menuElement,
  menuOpened = false;
document.querySelector(".user_menu").addEventListener("click", userMenu);
function userMenu() {
  const menuItems = [
    { url: "#", text: "My account" },
    { url: "#", text: "My tasks" },
    { url: "#", text: "Log out" },
  ];

  if (!menuOpened) {
    document.querySelector(".user_arrow").style.transform = "rotateZ(180deg)";
    menuDrop = document.createElement("div");
    menuDrop.setAttribute("class", "user_menu_drop");
    document.querySelector(".user_menu").appendChild(menuDrop);
    menuItems.forEach((item) => {
      menuElement = document.createElement("a");
      menuElement.setAttribute("class", "user_menu_drop_link");
      menuElement.setAttribute("href", item.url);
      menuElement.innerText = item.text;
      document.querySelector(".user_menu_drop").appendChild(menuElement);
    });

    menuOpened = true;
  } else {
    document.querySelector(".user_menu").removeChild(menuDrop);
    document.querySelector(".user_arrow").style.transform = "rotateZ(0deg)";
    menuOpened = false;
  }
}
