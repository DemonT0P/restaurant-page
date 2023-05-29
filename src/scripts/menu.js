function Clear() {
  let body = document.querySelector(".container");
  body.innerHTML = "";
}

function Menu() {
  Clear();
  let body = document.querySelector(".container");
  let menu = document.createElement("div");
  menu.setAttribute("class", "menu");

  let itemTitle = ["Black Coffee", "Moccacino", "Expresso"];

  let title = document.createElement("h1");
  title.innerText = "Menu";
  title.setAttribute("class", "menu__title");

  let subTitle = document.createElement("h2");
  subTitle.innerText = "Coffee";
  subTitle.setAttribute("class", "menu__sub-title");

  menu.appendChild(title);
  menu.appendChild(subTitle);

  for (let i = 0; i < 3; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "menu__item");

    let itemTitleText = document.createElement("div");
    itemTitleText.innerText = itemTitle[i];
    itemTitleText.setAttribute("class", "item__title");

    let itemDescription = document.createElement("div");
    itemDescription.innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    itemDescription.setAttribute("class", "item__description");

    let itemPrice = document.createElement("div");
    itemPrice.innerText = "10$";
    itemPrice.setAttribute("class", "item__price");

    item.appendChild(itemTitleText);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);

    menu.appendChild(item);
  }

  subTitle.innerText = "Sides";
  menu.appendChild(subTitle);

  body.appendChild(menu);

  itemTitle = ["Toast and Jam", "Chips", "Sauce"];

  for (let i = 0; i < 3; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "menu__item");

    let itemTitleText = document.createElement("div");
    itemTitleText.innerText = itemTitle[i];
    itemTitleText.setAttribute("class", "item__title");

    let itemDescription = document.createElement("div");
    itemDescription.innerText =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    itemDescription.setAttribute("class", "item__description");

    let itemPrice = document.createElement("div");
    itemPrice.innerText = "10$";
    itemPrice.setAttribute("class", "item__price");

    item.appendChild(itemTitleText);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);

    menu.appendChild(item);
  }
}

export default Menu;
