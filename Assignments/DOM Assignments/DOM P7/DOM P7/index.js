let first = document.querySelectorAll(".main__languages a");
let firstarray=Array.from(first);
firstarray.forEach((a) => {
    if(a.textContent.includes('2.0')){
        a.style.display='none';
    }
})