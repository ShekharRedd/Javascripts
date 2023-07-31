  
//   async function ram(){
    
//   let addd= new Promise((resolve , reject) => {
//     try{
//       // console.log(xdfzs)
//      setTimeout(()=>{
//       try{
//         console.log(dsfnmfev)
//         }
//        catch(err){
//         console.log("error here")
//         reject(err)
//        }
//       // console.log(xdfzs)
//        }
      
//     ,3000)
//   }
//   catch(err){

//       resolve(err)
//   }
//   })

//   let bddd= new Promise((resolve , reject) => {
//     setTimeout(()=>{
//      resolve("hello2")
//     },5000)
//  })


// console.log("starting from a")
// // let r1=await addd 
// // console.log(typeof r1)
// // console.log("starting from a",r1)

// try {
//   r1 = await addd;
//   console.log(typeof r1);
//   console.log("starting from a", r1);
// } catch (err) {
//   console.error("Error occurred:", err);
// }
// console.log("starting from b")
// let r2=await bddd
// console.log("starting from b",r2)
// return [r2]
// }



// let chery=async ()=>{
//   console.log("hello world")
// }
// const main1=async ()=>{

//   let a= await ram()
//   let b=await chery()
// }
// main1()

// console.log("hi")


// this queastion 1
// function addd(sr){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let script=document.createElement("script")
//       script.src=sr
//       document.body.appendChild(script)
//       script.onload=function(){
//         console.log("working correct")
//         resolve("done")
//       }
//       script.onerror=function(){
//         console.log("not working the src")
//         reject("fail")
//       }
//     })
//   })
// }


// let er=addd("https://go8ogle.com")
// er.then((value)=>{
//   console.log(value)

// })
// .catch((value)=>{
//   console.log(value)
// })

//--------------
// async function two(sr){
//   let addd=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let script=document.createElement("script")
//       script.src=sr
//       document.body.appendChild(script)
//       script.onload=function(){
//         // console.log("working correct")
//         resolve("done")
//       }
//       script.onerror=function(){
//         // console.log("not working the src")
//         reject("fail")
//       }
//     })
//   })
//   let bddd=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       try{
//       let script1=document.createElement("script")
//       script1.src="https://g899oogle.com"
//       document.body.appendChild(script1)
//       script1.onload=function(){
//         console.log("working correct")
//         resolve("done")
//       }
//       script1.onerror=function(){
//         console.log("not working the src")
//         reject("fail")
//       }
//     }
//     catch(error){
//       console.log("wrong thit ")
//       reject("error raising the ",error)
//     }
//     },2000)
//   })


//   console.log("starting await function pending status ...")
//     let r1=await bddd
//     // .then((value)=>{
//     // })
//     .catch((value)=>{
//       return value
//     })
    

//     console.log("staring the two asysn fucntion pending status ....")
//     let r2=await addd

//     console.log("successfully return the two promises",r2)
//     return [r1,r2]
    

// }

// console.log("welcome o my world")

// two("https://google.com").then((value)=>{
//   console.log("valuese",value)
// })

// // let er=addd("https://go8ogle.com")
// // er.then((value)=>{
// //   console.log(value)
// // })
// .catch((value)=>{
//   console.log("two catch",value)
// })

//--------------------


// let bddd=()=>{
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let script1=document.createElement("script")
//     script1.src="https://go89ogle.com"
//     document.body.appendChild(script1)
//     script1.onload=function(){
//       console.log("working correct")
//       resolve("done")
//     }
//     script1.onerror=function(){
//       console.log("not working the src")
//       reject(new Error("please this is not accepting"))
//     }
//   },20)
// })
// }

// const swe=async ()=>{
// try{
//   we=await bddd()
// }
//   catch(value){
//     console.log("error",value)
//   }
// // we=await bddd()

// }


// swe()

///////////////////////


let addd=()=>{
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("add")
  },2000)
})
}


let bddd=()=>{
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("bdd")
  },3000) 
})
}
let cddd=()=>{
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("cdd")
  },2000)
})
}


const swe=async ()=>{
  var t=new Date()

  // this method which takes total time to get the result this is bad methods to avoid it we use the promsie.all which is like asys fucntion 
// console.log(t.getSeconds())
//   console.log("startign the addd",t.getSeconds())
// a=await bddd()
// var t=new Date()
// console.log("completed",Number(t.getSeconds()))

// console.log("startign the bddd",t.getSeconds())
// b=await bddd()
// var t=new Date()
// console.log("completed",t.getSeconds())

// console.log("startign the cddd",t.getSeconds())
// c=await cddd()
// var t=new Date()
// console.log("completed",t.getSeconds())


let a=addd()
let b=bddd()
let c=cddd()
let d=await Promise.all([a,b,c])
console.log(d)
}

swe()