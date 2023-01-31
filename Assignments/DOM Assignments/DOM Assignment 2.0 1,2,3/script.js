//Task 1:-
//1. Adding a new option "Hire Me"
//2. Changing Contact option to Projects
//3. Hiding social media icons below in footer.

//Sol 1. Adding new Hire Me option
let nav = document.querySelector("nav");
let ul = nav.querySelector("ul");

let li = document.createElement("li");
let a = document.createElement("a");
a.href = "./hireMe";
a.innerText = "Hire Me";

li.appendChild(a);
ul.appendChild(li);

//Sol 2. Changing Contact to Projects
let atag=document.querySelectorAll("a");
let contact=Array.from(atag).filter((atag) =>
    atag.textContent === "Contact")[0];
contact.innerText = "Projects";

//Sol 3. Hiding Social media icons.
let footer=document.querySelector("footer");
let ulf=footer.querySelector("ul");

ulf.style.display="none";

//Task 2:- 
//1. Changing placeholder Search to "Search my Project" in search bar.
//2. Hiding Hire Me option from header.

//Sol 1. changing search to search my project
let search=document.querySelector(".search-field");
let place=search.querySelector("input");

place.placeholder="Search My Project";

//Sol 2. Hiding hire me
li.style.display="none";
