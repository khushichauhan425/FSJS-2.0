// 23. Write a program to check that the number given by the user is a prime number or not.

const number = 19;
let i;

for(i=2; i<number; i++){

    if(number%i==0){
        console.log(`${number} is not a prime number`);
        break;
    }
}

if(i==number)
console.log(`${number} is a prime number`);