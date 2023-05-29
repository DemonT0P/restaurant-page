function Clear() {
  let body = document.querySelector(".container");
  body.innerHTML = "";
}

function Home() {
  Clear();
  console.log("chamou");
  let body = document.querySelector(".container");
  let home = document.createElement("div");
  home.setAttribute("class", "home");

  //Title
  let title = document.createElement("h1");
  title.textContent = "Welcome to Coffee's Café";
  title.setAttribute("class", "home__title");

  //Review
  let review = document.createElement("div");
  review.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque vero nesciunt molestiae nisi, sit illum deserunt iste ut rerum fugit, excepturi velit quidem incidunt laudantium dolorum, iure quas suscipit voluptas.";
  review.setAttribute("class", "home__review");

  let reviewer = document.createElement("span");
  reviewer.textContent = "- Reviewer";
  reviewer.setAttribute("class", "home__highlight-text");

  review.appendChild(reviewer);

  let hourContainer = document.createElement("div");
  hourContainer.setAttribute("class", "home__hours");

  let hoursTitle = document.createElement("div");
  hoursTitle.textContent = "Hours";
  hoursTitle.setAttribute("class", "home__highlight-text");

  let hours = document.createElement("div");
  hours.innerHTML =
    "Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm<br>";
  hours.setAttribute("class", "hours__hours");

  hourContainer.append(hoursTitle);
  hourContainer.append(hours);

  let adress = document.createElement("div");
  adress.setAttribute("class", "home__adress");

  let location = document.createElement("span");
  location.textContent = "Location";
  location.setAttribute("class", "home__highlight-text");

  adress.append(location);
  adress.innerHTML += "123 Forest Drive, Forestville, Maine";

  home.appendChild(title);
  home.appendChild(review);
  home.appendChild(hourContainer);
  home.appendChild(adress);
  body.appendChild(home);
}

export default Home;
