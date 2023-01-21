// 12. Create a human readable time format using the Date time object
//    - YYYY-MM-DD HH:mm
//    - DD-MM-YYYY HH:mm
//    - DD/MM/YYYY HH:mm

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const now = new Date();
console.log(now.toString());
console.log("YYYY-MM-DD HH:mm" ,now.getFullYear(),months[now.getMonth()],now.getDate(),now.getHours(),":",now.getMinutes());
console.log("DD-MM-YYYY HH:mm", now.getDate(),months[now.getMonth()],now.getFullYear(),now.getHours(),":",now.getMinutes());
console.log("DD/MM/YYYY HH:mm", now.getDate(),months[now.getMonth()],now.getFullYear(),now.getHours(),":",now.getMinutes());