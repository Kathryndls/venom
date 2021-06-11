const menuButton = document.guerySelector(".menu-button");
const menu = document.guerySelector(".nav-menu");
const menuCloseButton = document.guerySelector(".menu-close");

menuButton.addEventListener("click", () => {
    menu.classlist.add("is-active");
    menuCloseButton.classlist.add("is-active");
});
menuButton.addEventListener("click", () => {
    menu.classlist.remove("is-active");
    menuCloseButton.classlist.remove("is-active");
});