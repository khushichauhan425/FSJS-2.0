//Third Assignment
//Task 1:-
//1. Change Projects to contact in header
//2. Add required data in the form.

//Sol 1. Change Projects to contact in header
let atag=document.querySelectorAll("a");
let projects=Array.from(atag).filter((atag) =>
    atag.textContent === "Projects")[0];
projects.innerText = "Contact";

//Sol 2. Add required data in the form and reset it on submit.
let form=document.querySelector("mainRight form");
let userName=document.querySelector(".userName");
let userEmail=document.querySelector(".userEmail");
let userMessage=document.querySelector(".userMessage");