"use strict";
//let x: number = 1; //x can store number only 
let x = 1; //x can store number and string both
// let x = 1;  type inferencing
x = "karan";
console.log(x);
function greet(name) {
    console.log(" hi " + name);
}
greet("karan");
function greet2(name) {
    console.log(" hi " + name);
}
greet2("karan");
greet2(1);
greet2(true);
function sum(a, b) {
    return a + b;
}
//we dont have to define return type of the 
// fucntion beacause ts can automatically inferred the return type
// of the sum function is a number so , the ans is type fo number.. tis called type inferencing
let ans = sum(1, 3);
console.log(ans);
function sum2(a, b) {
    return a + b;
}
//type inferecing : stirng + number = string , so 
// the type of ans2 is string automatically beacuse return type of 
//  function is string
let ans2 = sum(1, 3);
console.log(ans2);
// explicitlly giving type to a function, so ts compiler doesnt automatically inferr it 
function sum3(a, b) {
    return a + b;
}
let ans3 = sum(3, 5);
console.log(ans3);
