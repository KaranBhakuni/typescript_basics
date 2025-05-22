
//let x: number = 1; //x can store number only 
let x: number | string= 1; //x can store number and string both
// let x = 1;  type inferencing
x= "karan"
console.log(x)


function greet(name: string){
    console.log(" hi "+ name);
}

greet("karan");

function greet2(name: any){   // any type can store all types
    console.log(" hi "+ name); // avoid using any 
}
greet2("karan");
greet2(1);
greet2(true);


function sum(a: number,b:number){  
    return a+b;
}
//we dont have to define return type of the 
// fucntion beacause ts can automatically inferred the return type
// of the sum function is a number so , the ans is type fo number.. tis called type inferencing

let ans=sum(1,3);
console.log(ans);


function sum2(a: string,b:number){   
    return a+b;
}
//type inferecing : stirng + number = string , so 
// the type of ans2 is string automatically beacuse return type of 
//  function is string
let ans2=sum(1,3);
console.log(ans2)


// explicitlly giving type to a function, so ts compiler doesnt automatically inferr it 
function sum3(a: number,b:number): number {
    return a+b;
}


let ans3=sum(3,5);
console.log(ans3 )


// create a fn that takes another fn as input, and runs it after 1 second
function delayedCall(fn:()=> void){

    setTimeout(fn, 1000);
}

// delayedCall(function(){
//     console.log(
//         "hello"
//     )
// })

function log() {
    console.log("hi there");
}

delayedCall(log)

//function to greet a object / object as arguemnt
function greet3(user:{
    name: string,
    age: number
}){
    console.log("hello "+user.name)
}

greet3({
    name: "karan",
    age: 22
})

let user2 = {
    name: "john",
    age: 50,

}
greet3(user2)
