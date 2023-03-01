let clear = document.querySelectorAll(".clearfix");

let inner = document.querySelectorAll(".one-third");

let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"];
 for (let i=0; i<5; i++){
    clear[i].style.background = arr[i];
 }

inner.forEach((e) => {
    e.style.color="#fff";
})