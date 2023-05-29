import "./styles/main.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/contact.scss";
import Home from "./scripts/home";
import Menu from "./scripts/menu";
import Contact from "./scripts/contact";

let home = document.querySelector(".header__home");
home.addEventListener("click", Home);
let menu = document.querySelector(".header__menu");
menu.addEventListener("click", Menu);
let contact = document.querySelector(".header__contact");
contact.addEventListener("click", Contact);

Home();
