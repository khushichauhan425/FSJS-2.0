// 11. Use the Date object to do the following activities


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let a = new Date();

//    - What is the year today?
console.log(a.getFullYear());

//    - What is the month today as a number?
console.log(months[a.getMonth()]);

//    - What is the date today?
console.log(a.toString());

//    - What is the day today as a number?
console.log(a.getDate());

//    - What is the hours now?
console.log(a.getHours());

//    - What is the minutes now?
console.log(a.getMinutes());

//    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let ms = Date.now();
console.log(ms);