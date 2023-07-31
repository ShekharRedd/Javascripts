


// console.dir(value.headers)


// const apiKey = "92dc79b5bc8c061bd96b2bd3d33c5fb9";
// const latitude = 51.5072;
// const longitude = 0.1276;

// const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Accessing temperature from the response data
//     console.log(data)
//     // data.headers.forEach((value, name) => {
//     //   console.log("hi")
//     //   console.log(`${name}: ${value}`);
//     // })
//   })
 



//task 1

// let p=fetch("https://jsonplaceholder.typicode.com/todos/1")
// p.then((value)=>{
//   console.log(value.ok)
//   console.log(value)
  
// })

//task 2


// const t1=async ()=>{

//   let p=await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   let res=await p.json()
//   return res
// }

// console.log(t1())

//task 3

// fetch('https://jsonplaceholder.typicode.com/posts', {
  // method: "POST",
  // body: JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // }),
  // headers : {
  //   'Content-type':'application/json',
  // },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));




//task 4
const t1=async ()=>{

let rt1=async ()=>{
    try{
    let p=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let res=await p.json()
    return res
    }
    catch(err){
      console.log("error")
    }
  }

  let rt2=async ()=>{
  try{
  let p1=await fetch("https://jsonplaceholder.typicode.com/posts/2")

  let res1=await p1.json()
  return res1
  }
  catch(err){
    console.log("error")
  }
}

let y=await Promise.all([rt1(), rt2()])
console.log(y)
}
// const w1=async (op)=>{
//     let y=await Promise.all([rt1(op), rt2(op)])

//   console.log(y)
//   // see.innerHTML=y.body}
//   }

// let op={
//   method: "POST",
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers : {
//     'Content-type':'application/json',
//   },
// }
t1()



// const rt1 = async (op) => {
//   try {
//     let p = await fetch("https://jsonplaceholder.typicode.com/posts", op);
//     let res = await p.json();
//     return res;
//   } catch (err) {
//     console.log("error");
//   }
// };

// const rt2 = async (op) => {
//   try {
//     let p1 = await fetch("https://jsonplaceholder.typicode.com/posts", op);
//     let res1 = await p1.json();
//     return res1;
//   } catch (err) {
//     console.log("error");
//   }
// };

// const w1 = async (op) => {
//   let y = await Promise.all([rt1(op), rt2(op)]); // Pass an array of promises to Promise.all
//   console.log(y);
//   // see.innerHTML = y.body
// };

// let op = {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// w1(op);
