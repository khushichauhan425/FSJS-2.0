console.log("3nd Pattern");

let str3="";
for(let i=1; i<=3; i++){
    for(let j=1; j<=3-i; j++){
        str3+=" ";
    }
    for(let k=0; k<2*i-1; k++){
        str3+='*';
    }
    str3+="\n"; ;
}

console.log(str3);