/*
// "use strict";
let n1="11"
//console.log(parseInt(n1)) this will return a number here by default base 10  Base-10 is a number system that assigns place value to numerals and is sometimes called the decimal system
console.log(parseInt(n1,2)) // 2 will acts like a binary number base 2 

const n={
    e:45
}
// Object.freeze(n)
n.e=34

console.log(n)

const rt=function (){
    return "hello world";
};

const er=(a) => "good morning"+a

console.log(rt())
console.log(er(34))

let t1=[1,-4,2,0,-4,3]

let sr1=(arr) =>{
    let sw=arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    console.log("helloer",sw)
};
sr1(t1)

// these if for the to access the filter function for object

let t2={
    "ip" :"shakhe",
    "ram" : "r"
}
let sr=(arr) =>{
    let sw=Object.entries(arr).filter(([ket,value]) => ket=="ip");
    console.log(sw)
};

sr(t2)


/*
const start=(function sun(){
    return function rte(a,b=0){
        console.log(a+b)
        // for (const i in r) {
        //     console.log(r[i])
        // }
        // return a+b;
    }
})();

// console.log(start([3,4,5,6,7,8]));
console.log(start(3))

*/

/*
const start=function (a,b=0){
    return a+b
}
console.log(start(56))

//rest  operator

const r=(function (){
    return function r(...args){
        return args.reduce((a,b) =>a+b,0)
    }
    }

)();

console.log(r(2,4))
*/



/*
/// spread operator

var ar1=["a","b","c"]
function spread(){
// here it will modify it as we change the ar1 itself to avoid we use the spread operator
    // var ar2=ar1
    // ar1[0]="x"

    // return ar2 

    // we don't want to modify the ar2 we use ar2=...ar1
    var ar2=[...ar1]
    ar1[0]="x"

    return ar2 
                  
}

console.log(spread())

*/


// destruction assignment

/*
per={
    x :1,
    y : 2,
    z : {
        "min" : 23,
        "max" : 24
    }
};


function getper(avg){
    // var se1 =avg.x
    // var se2 = avg.y
    // var se3 = avg.z
    // console.log(se2)
    const {"x" : a,"y" : b,"z" : c} =avg // instead of creating single value to each use the method
    // return c
    const {"x" : er1,"y" : er2, "z" : { "min" : er3 ,"max" : er4}} =avg // we can acess the inside of object also
    return String(er3)+" "  + String(er4)
}

console.log(getper(per))

/// in array we cannot do it must be order in access

const [z,x, , y]=[1,2,3,4,5,6,7,7]
console.log(z,y)

let a=8 ,b=6;
(() => {
    "use strict";
    [a,b]=[b,a];
})();
// [a,b]=[b,a]
console.log(a)
console.log(b)


// if you  want to print the remove firstTwo elemnts
//  and print it

const wer=[1,2,3,4,5,6,7,7]
const [,,...args]=wer
console.log(args) // removing the first two number and append into arsg this is used 

*/


/*
// these is used for the IIFE
const stats={
    max :34.34,
    min : 31.3
};

const half=(function (){
    
    // return "hello world"
   return function (gh){
    console.log(gh)
    return "hello world"
   }
    

})();

console.log(half())

const swe=function rrt(){
    // console.log("hi")
    return "hi"
}

console.log(swe())

// const half=(function (){
//     return function half({max,min}) {
                
//         return (max+min)/8.0;
//     }
// })();



var x3 = 10;

(function () {
   var x3 = 5; // Local variable x, doesn't affect the global x
  console.log(x3); // Output: 5
})();

console.log(x3); // Output: 10 (global x remains unchanged)

*/



/*

// simple field
const create=(aname,age,gender) => ({aname,age,gender})
    // instead of doing the return all use the above one
    // return {
    //     aname :aname,
    //     age : age,
    //     gender :gender
    // }
// }

we=create("shekhar",23,"male")
console.log(we.age)

*/

/*

// class keyword 

// this is older way to create a object
var add =function (er){
    this.er=46
}
var se = new add(34)
console.log(se.er)

// this is newer way this function is called factory function

function maker(){
class vege {
    constructor(name){
        this.name=name
    }
}
function erer(){
   return "helllo world" 
}
return [vege , erer];
}
// this maker full will expose the class construction
var [vege,erer]=maker()
// var we=new maker()
// var yet=new we()
console.log(erer())

var rt=new vege("shekhar")
console.log(rt.name)



// class setter and getter

function addc(){
    class gerr{
        constructor(con){
            this._con=23
        }
        get temp(){
            return this._con
        }
        set temp(swa){
            this._con=swa
        }

    }
    return gerr
};

var qwe=addc()

var aa=new qwe(23)
let a3=aa.temp;
a3=aa.temp
aa.temp=456
// let cw=aa.temp
a3=aa.temp
console.log(a3)

*/


// import and export

// import { capitalizeString } from "./imports"; 

// const wet = capitalizeString("hello");
// console.log(wet);

// const { capitalizeString } = require("./imports.js"); 

// const wet = capitalizeString("hello");
// console.log(wet);

document.body.style.background = "yellow"
alert("Welcome to check whether you can drive or not.");
let re=true;
while (re){
(function() {
    let age = parseInt(prompt("enter the age "));
    if (age>20){
        alert("you can drive");
        location.href="https://google.com"

    }
    else{
        alert("you are not drive");
    }
})();
// re=confirm("do you want to play again ?");
}
// wt=confirm("you want to see the see the promte click ok")
// if (wt){
//     a()
// }


// document.body.style.background = "yellow";
// alert("Welcome to check whether you can drive or not.");

// (function() {
//     let age = parseInt(prompt("Enter your age: "));
//     if (age > 20) {
//         alert("You can drive.");
//     } else {
//         alert("You are not allowed to drive.");
//     }
// })();

// let wantToSeePrompt = confirm("Do you want to see the prompt again? Click OK for yes.");
// if (wantToSeePrompt) {
//     (function() {
//         let age = parseInt(prompt("Enter your age: "));
//         if (age > 20) {
//             alert("You can drive.");
//         } else {
//             alert("You are not allowed to drive.");
//         }
//     })();
// }
