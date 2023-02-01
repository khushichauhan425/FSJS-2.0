let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//Second Assignment:-
//Task 1:-
//1. Change Contact to Projects in header.
//2. Change the color of the fields to purple.

//Sol 1. Change Contact to Projects in header.
let atag=document.querySelectorAll("a");
let contact=Array.from(atag).filter((atag) =>
    atag.textContent === "Contact")[0];
contact.innerText = "Projects";

//Sol 2. Change the color of the fields to purple.
Array.from(accordian);
accordian.forEach((element) =>{
  element.style.background = "#DADAF8";
})

//Task 2:-
//1. Adding a skills tab.
//2. Adding content ot it.

//Sol 1. Adding a skills tab.
let main=document.querySelector(".accordian-wrapper");

let d=document.createElement("div");
let skill=document.createElement("h3");
let para=document.createElement("p");

d.className="accordian";
skill.style.background="rgb(218, 218, 248)";
skill.innerText="Skills";
d.appendChild(skill);
main.append(d);

// //Sol 2. Adding content ot it.
// d.appendChild(para);
// // para.onclick=function(){
// //   add()
// // };
// // function add(){
// //   para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
// // }

// para.addEventListener('click',(event) => {
//   para.innerText="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
// });