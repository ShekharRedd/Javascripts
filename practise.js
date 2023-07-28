  
  async function ram(){
  let addd= new Promise((resolve , reject) => {
     setTimeout(()=>{
      resolve("hello")
     },3000)
  })
  let bddd= new Promise((resolve , reject) => {
    setTimeout(()=>{
     resolve("hello2")
    },5000)
 })


 console.log("starting from a")
let r1=await addd
console.log("starting from a",r1)

console.log("starting from b")
let r2=await bddd
console.log("starting from b",r2)
return [r1,r2]
}



let chery=async ()=>{
  console.log("hello world")
}
const main1=async ()=>{

  let a= await ram()
  let b=await chery()
  // a.then((va)=>{
  //   console.log("hhesf",va)
  // })
  // a.catch((va)=>{
  //   console.log(va)
  // })
}

console.log("hi")


  
async function ram(){
  let addd= new Promise((resolve , reject) => {
     setTimeout(()=>{
      resolve("hello")
     },3000)
  })
  let bddd= new Promise((resolve , reject) => {
    setTimeout(()=>{
     resolve("hello2")
    },5000)
 })


 console.log("starting from a")
let r1=await addd
console.log("starting from a",r1)

console.log("starting from b")
let r2=await bddd
console.log("starting from b",r2)
return [r1,r2]
}



let chery=async ()=>{
  console.log("hello world")
}
const main1=async ()=>{

  let a= await ram()
  let b=await chery()
  // a.then((va)=>{
  //   console.log("hhesf",va)
  // })
  // a.catch((va)=>{
  //   console.log(va)
  // })
console.lo