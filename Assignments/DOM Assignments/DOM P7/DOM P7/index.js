let first = document.querySelectorAll(".main__languages a");
let firstarray=Array.from(first);
firstarray.forEach((a) => {
    if(a.textContent.includes('2.0')){
        a.style.display='none';
    }
})


let input = document.querySelector(".main__form-input");
let btn = document.querySelector(".main__form-btn");

input.removeAttribute("disabled");
btn.removeAttribute("disabled");

btn.addEventListener("click",(e) => {
    e.preventDefault();
    localStorage.setItem("inputValue", input.value);
    location.reload();
});


window.addEventListener("load",() => {
    const stored = localStorage.getItem("inputValue");
    input.value = stored;
    const lang = document.querySelector(".main__languages");
    const a = document.createElement("a");
    a.target = 'blank';
    a.href = 'https://www.ineuron.ai';
    a.innerText = stored;
    lang.append(a);
});