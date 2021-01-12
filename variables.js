//hoisting is the process of Variable and function declaration being moved to the top before code execution

console.log("x is "+x); //prints "x is undefined" because declaration of x is put on the top but not defenition
var x = 10;

sayHello(); //here function is hoisted to the top and prints "Hello there"
function sayHello(){
    console.log("Hello there");
}


//var is global

var num1 = 10;

function increment(){
    num1++;
    //num1 = 11
    console.log("num1 inside increment() is "+num1); //prints 11
}

//function is not called so num1 is still 10
console.log("num1 before increment() call is "+num1);
increment();
//now num1 is 11
console.log("num1 after increment() call is "+num1);





//let is local, it only exists within the scope

function square(){
    let num2 = 3;
    num2 = num2*num2;
    //num2 = 9
    console.log("num2 inside square() is "+num2); //prints 9
}

square();
//the line below gives ReferenceError because num2 exists inside square() function
//console.log("num2 after square() call is "+num2);





//const is fixed, unchangeable..Must be assigned value when created..Then its unchangeable

const y = 20;

// re assigning to y gives TypeError: Assignment to constant variable
//y is fixed..No more change is accepted
//y = 30

console.log(y);