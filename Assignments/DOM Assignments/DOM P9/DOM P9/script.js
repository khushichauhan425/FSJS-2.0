
let title = document.querySelector(".caption h1");
title.style.color="#DC143C";

let img = document.querySelector(".add-to-cart img");
img.src="./images/icon-cart.svg";


let cart = document.querySelector(".add-to-cart");
cart.addEventListener("mouseover", () =>{
    cart.style.background="#DC143C";
});

cart.addEventListener("mouseout",() =>{
    cart.style.background = "hsl(158, 36%, 37%)";
});