let new1 = document.querySelector(".new");

new1.style.border = "3px solid red";
new1.style.padding ="30px";
new1.style.overflow = "auto";
console.log(new1);


const toggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".navbar-collapse");

toggler.addEventListener("click", () => {
    collapse.classList.toggle("show");
});
