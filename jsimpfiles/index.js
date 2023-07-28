// console.log("hello world ");

// var c=23
// console.log(c)
// c="er"
// c=9
// console.log(c)

// console.log(typeof c)
// console.log(typeof d)

// let r="welcome to my world"


// console.log()
// let name = "John";
// let age = 25;
// let message = `My name is ${name} and I am ${age} years old.`;

// console.log(message);

// let t=`today is my good day ${c} and my frd ${c}`
// console.log(t)
// console.log(r+ " "+c)



// name = null;
// let defaultName = "Guest";

// let displayName = name ?? defaultName;
// console.log(typeof displayName); // Output: "Guest"



// l=[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < 10; i++)
// {
//     console.log(i)
// }

var st="<input type= \"button \" value=\"Submit\" onclick=\"add()\" />"


console.log(st)


var str1=`'<input type="button" value="Submit" 'onclick="add()"' />'`

console.log(str1)

let singleQuoteString = 'He said, \'Hello!\'';
let doubleQuoteString = "She said, \"Hi!\"";
let backslashString = "The path is C:\\Users\\Username\\Documents";
let multilineString = "Line 1\nLine 2\nLine 3";

console.log(backslashString)

let v=45

if (v<45) {
  console.log("good")
}
else {
  console.log("bad")
}

let data="mango"

switch (data){
  case "mango" :
    console.log("hello");
    break;
  case "orange" :
    console.log("moring");
    break;
  default :
    console.log("wrong enter")
    break
}



var l1=20;

function add1(qw){
  if (qw<10){
    return "less than 10"
  }
  else if (qw<20){
    return "less than 20"
  }
  // else{
  //   return "pass correct value"
  // }
}
if (l1<10){
  con
}


console.log(add1(10))


function outerFunction() {
  let outerVar = "I am from outerFunction";
  
  function innerFunction() {
    console.log("hello world"); 
    ourt() // Accessing outerVar from the parent function
  }
  function ourt(){
    console.log("good moring")
  }
  
  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: "I am from outerFunction"
