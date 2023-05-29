import Home from "./home";

function Clear() {
  let body = document.querySelector(".container");
  body.innerHTML = "";
}

function Contact() {
  Clear();
  let body = document.querySelector(".container");
  let contact = document.createElement("div");
  contact.setAttribute("class", "contact");

  let title = document.createElement("h1");
  title.innerText = "Contact Us";
  title.setAttribute("class", "contact__title");

  let userName = ["Chef's Name", "Barista's Name", "Manager's Name"];
  let userRole = ["Chef", "Barista", "Manager"];
  let userNumber = ["155-5555-555", "555-5555-55", "123-4567-890"];
  let userEmail = [
    "realemailCHEF@emailreal.com",
    "realemailBARISTA@emailreal.com",
    "realemailMANAGER@emailreal.com",
  ];

  contact.appendChild(title);

  for (let i = 0; i < 3; i++) {
    let user = document.createElement("div");
    user.setAttribute("class", "contact__user");

    let name = document.createElement("h1");
    name.innerText = userName[i];
    name.setAttribute("class", "user__name");

    let role = document.createElement("h2");
    role.innerText = userRole[i];
    role.setAttribute("class", "user__role");

    let number = document.createElement("h2");
    number.innerText = userNumber[i];
    number.setAttribute("class", "user__number");

    let email = document.createElement("h2");
    email.innerText = userEmail[i];
    email.setAttribute("class", "user__email");

    user.appendChild(name);
    user.appendChild(role);
    user.appendChild(number);
    user.appendChild(email);

    contact.appendChild(user);
  }

  body.appendChild(contact);
}

export default Contact;
