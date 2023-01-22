//  19. Create a countries.js file and store the countries name into this 
// file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js


file1 = require("./countries.js");
file2 = require("./web_techs.js");

console.log(file1.countries);
console.log(file2.web_techs);

console.log("The 2nd index element of countries=> "+file1.countries[1] +
" and 1st element of web_tech=> "+ file2.web_techs[0]);