// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


let num1 = 43;
let operation = '+';
let num2 = 21;

function calculator(num1,operation,num2){

    if(operation=='+'){
        console.log(`${num1} + ${num2} = `,num1+num2);
    }
    else if(operation=='-'){
        console.log(`${num1} - ${num2} = `,num1-num2);
    }
    else if(operation=='*'){
        console.log(`${num1} * ${num2} = `,num1*num2 );
    }
    else if(operation=='/'){
        console.log(`${num1} / ${num2} = `,num1/num2);
    }
    else if(operation=='%'){
        console.log(`${num1} % ${num2} = `,num1%num2);
    }

}

calculator(num1,operation,num2);