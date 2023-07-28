/*
var st="shekhar reddy"

console.log(st.length)

console.log(st.split("e"))
console.log(st[st.length-1])

//console.log(st[-1]) this will give error


st[1]="2"
console.log(st)

///Arrays
var myArray=[[1,2,3,4],2,3,[[1,2,5],3,4]]

console.log(myArray[3][0][0])

//adding the element to first index
myArray.push([2]);
console.log(myArray)

// pop will remove the last element
myArray.pop();
console.log(myArray)


/// shift function will remove the first element
myArray.shift()
console.log(myArray)

// unshift will similar to push but here unshift will add the first
myArray.unshift([3,4])
console.log(myArray)

let g=null;
// g="hello" Null: Represents the intentional absence of any object value. Example: null.
console.log(g);

// to convert the [ [ 3, 4 ], 2, 3, [ [ 1, 2, 5 ], 3, 4 ] ] into [[3,4],2,3,[[1,2,5],3,4]]  using below command
 console.log(JSON.stringify(myArray))

 function and(arr,item){
    arr.push(item)
    return arr.shift()
 }

 arr=[1,2,3,4]
 console.log(arr)
 console.log(and(arr,8))
 console.log(arr)


///adding the element and remove the first element it is called queue [1,2,3,4] if we add num it places  after 4 and remove num take the 1  
const n2=[1,2,3,4,4,7]
n2.push(2)
n2.shift()
console.log("hello",n2)

//splice (start,count,adding element)
let n3=["a","b","c","d","e","f"]
let g1=n3.splice(2,3,"z","y","x")
console.log(g1)
console.log(n3)

//loop method 2
n3.forEach((n4) =>{
    console.log(n4)
});

//loop method 3

for (const n4 of n3) {
    console.log("hellow ",n4);
  }
  
/////////////////function 



var name="sggs";
var n1="ram";

function add(a,b){
    console.log(name) // here it will present  This means that it is not recommended to use let in these contexts,
    console.log(n1)
    var n1="hanuman"
    return a+b

}
add(2,3)
console.log(n1)

//difference between the var and let

function checkscope(){
    let i="function";
    if (true) {
        let y= "hello world";
        var t="good mrning"
        console.log("block scope",y);

    }
    // console.log("function scope",y) it will gives error because let are block level
    //console.log("function scope",t)  here we can use because the var is function level
    console.log("function scope",t) 
}

checkscope()

//two  method is function expression

let cs=function(a,b) {
    return a+b
}
console.log(cs(3,2))


/// third method is Arrow Functions (ES6):
let mul=(a,b) => a*b

const er=mul(3,2)
console.log(er)
//const index = this.items.findIndex((cartItem) => cartItem.id === item.id);

//var it=prompt("enter the number")
*/
/////////////objects
const person={
    name : "shekhar",
    age : 23,
    18 : "virat kohli",
    phone : 7878787,
    adress : function(){

        console.log("anantapur(D) andhra pradesh [S]")
        return `your name is ${this.name} and age is ${this.age}`
    },
    gear : 23,
    // another method
    // set(g){
    //     this.gear=g
    // }
    set : function(g){
        this.gear=g
    }
}
// person.adress()
// console.log(person.adress())

// // var player=prompt("enter the number to get the player name")
// console.log(person[18])
// delete person.phone

console.log(typeof person.name)


// console.log(person.set(34))
console.log(person.gear)

///excises 

arrr={
    
    "alpha" :"shekhar",
    "bravo" : "bravo"
}

function practise(val){
    var result="";
    console.log(val)
    if (arrr.hasOwnProperty(val)){
    console.log(`the name of the person nameis ${arrr[val]}`)
    }
    else {
        console.log("enter correct value")
    }

}
practise("brvo")



arrr3={
    "first" :{
    "title" :"ew",
    "track" :["1","2","3"]
    
    },
    "second" : {
        "title" : "good moring",
        "track" :[]
    }

};


function wsa(id,pro,value){
    
    if (pro==="track"){
        arrr3[id][pro]= arrr3[id][pro] || []
        arrr3[id][pro].push(value)
    }

}
// console.log(arrr3.first.alpha)
wsa("first","track","good after")

console.log(arrr3)


te=[
    {
        "a":2
    },
    {
        "b" :3
    }
]

console.log(te[0].a=="a")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Use the readline module to get user input
rl.question('Enter something: ', (answer) => {
  console.log(`You entered: ${answer}`);
  rl.close(); // Close the readline interface when done
});


////////////closuer
/*
function add(){
    let a=2;
    let b=4;
    function sub(){
        // console.log(3+4+3);
        // console.log("hello world welcome to my world")
        console.log("hello world");
        console.log(a-b);
        

    }
    function mul(){
        console.log("multipling the two numbers")
        console.log(a*b);
        
    }
    return {
        sub,
        mul
    }
}


const war=add();

war.sub();
*/
