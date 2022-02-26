const datefieldUK = document.querySelector("#date");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);


// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

document.querySelector("#copyright-year").innerText = now.getFullYear();

document.querySelector("#last-modified-date").innerText = new Date(
  document.lastModified
);

const dateNumber = now.getDay();

const message = document.getElementById("message");

if (dateNumber == 1 || dateNumber == 2) {
  message.classList.add("showme");
} else {
  message.classList.add("hideme");
}




var lastVisit = new Date (localStorage.getItem("lastdate"));
var diff = Math.floor((now - lastVisit) / 84600000);
document.getElementById("last-visit").textContent = diff;
localStorage.setItem("lastdate", now);
 




const temp = parseFloat(document.getElementById("temp").textContent);

const speed = parseFloat(document.getElementById("speed").textContent);

let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
wc = Math.round(wc);

if(temp <= 10 && speed > 4.8) {
  document.getElementById("chill"). textContent = "Wind chill: " + wc + "\xB0F";
} else {
  document.getElementById("chill"). textContent = "No wind chill today 😄";
};

