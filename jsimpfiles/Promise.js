
  let ert= (src) => {
    console.log("gi")
    return new Promise((resolve, reject) => {
      var spt = document.createElement("script");
      spt.src = src;
      // console.log(src)
      document.body.appendChild(spt)
      spt.onload =  () => {
        resolve(1);
      };
      spt.onerror =  () => {
        reject(0);
        // console.log("Error loading the function"+src)
      };
    });
  }


  let p1=ert("https://google.com")
  p1.then(()=>{
    console.log("hi")
    return new Promise ((resolve,reject) =>{
      setTimeout(() => {
      resolve(4)
      },2000)
    })
  })
  .then((value)=>{
    console.log("the value of values i")
    console.log(value)
  })
  .then(()=>{
    console.log("welcome to my world")
  
  })


  // method 2 
function asyncFunc1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Result 1"), 1000);
  });
}

function asyncFunc2(input) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${input} -> Result 2`), 1000);
  });
}

function asyncFunc3(input) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${input} -> Result 3`), 1000);
  });
}

function asyncFunc4(input) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${input} -> Result 4`), 1000);
  });
}

// Chain of asynchronous operations using promises
asyncFunc1()
  .then(result1 => {
    console.log("Handling result 1:", result1);
    return asyncFunc2(result1);
  })
  .then(result2 => {
    console.log("Handling result 2:", result2);
    return asyncFunc3(result2);
  })
  .then(result3 => {
    console.log("Handling result 3:", result3);
    return asyncFunc4(result3);
  })
  .then(result4 => {
    console.log("Handling result 4:", result4);
  });



  // to check whether the src is valid url or not 

//   let ert= (src) => {
//     console.log("gi")
//     return new Promise((resolve, reject) => {
//       var spt = document.createElement("script");
//       spt.src = src;
//       // console.log(src)
//       document.body.appendChild(spt)
//       spt.onload =  () => {
//         resolve(1);
//       };
//       spt.onerror =  () => {
//         reject(0);
//         // console.log("Error loading the function"+src)
//       };
//     });
//   }
// console.log(ert)
// const { json } = require("stream/consumers")


  // let p1=ert("https://google.com")
  // p1.then(()=>{
  //   console.log("hi")
  //   return new Promise ((resolve,reject) =>{
  //     setTimeout(() => {
  //     resolve(4)
  //     },2000)
  //   })
  // })
  // .then((value)=>{
  //   console.log("the value of values i")
  //   console.log(value)
  // })
  // .then(()=>{
  //   console.log("welcome to my world")
  
  // })


  // function sysfun(src){
  //   return new Promise((resolve,reject)=>{
  //       setTimeout(()=>{
  //         let data=src
  //         let script=document.createElement("script")
  //         script.src=src
  //         document.body.appendChild(script)
  //         script.setAttribute('id',"good")
  //         script.onload=()=>{
  //           resolve(src)
  //         }
  //         script.onerror=()=>{
  //           reject(src)
  //         }
  //       },20)
  //   })
  // }


  // sysfun("https://google.com")
  // .then((data)=>{

  //   window.location.href = data;
  //   console.log(data)

  // })


  let 