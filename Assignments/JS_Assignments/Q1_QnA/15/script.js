// 15. Write a program which can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let score = prompt("Enter the score");
if(score>=80 && score<=100){
    alert("Grade A");
}
else if(score>=70 && score<=89){
    alert("Grade B");
}
else if(score>=60 && score<=69){
    alert("Grade C");
}
else if(score>=50 && score<=59){
    alert("Grade D");
}
else{
    alert("Grade F");
}