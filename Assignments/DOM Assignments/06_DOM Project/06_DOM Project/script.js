let headerimg = document.querySelector("header img");
headerimg.src = "./assets/ineuron-logo.png";

let appprice = document.querySelector(".app_price span");
appprice.innerText="$10";

let footerText = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");

footerText.style.color = "#5A5A5A";
strong.style.color = "#000";


let footerSocial = document.querySelector(".footer_social");

// Creating div with class name "footer_social_ico" 
let div = document.createElement("div");
div.className = "footer_social_ico";

// creating icons with the help of favicon
let i = document.createElement("i");
i.classList = "fa-brands fa-linkedin";

//appending icons to div and then div to footerSocial
div.append(i);
footerSocial.append(div);