  let a= new Promise((resolve , reject) => {
     setTimeout(()=>{
      resolve("hello")
     },2000)
  })
  let b= new Promise((resolve , reject) => {
    setTimeout(()=>{
     resolve("hello2")
    },2000)
 })

 let c= new Promise((resolve , reject) => {
  setTimeout(()=>{
   resolve("hello3")
  },2000)
})

let d= new Promise((resolve , reject) => {
  setTimeout(()=>{
   resolve("hello4")
  },1000)
})


  // let promise_all=Promise.all([a,b,c,d])  # give only all pass 
  // let promise_all=Promise.allSettled([a,b,c,d]) # give all states resolve or reject
  // let promise_all=Promise.race([a,b,c,d])  // which execute the less time first



  let promise_all=Promise.allSettled([a,b,c,d])

// console.log(promise_all)
promise_all.then(value=>{

  console.log(typeof value)
  // for (let i=0;i<3;i++){
  // // const rt=value
  // console.log("typeof",value[i])
  // console.log(typeof value[i])
  // let keyvalue=Object.entries(value[i])
  // console.log("first one is ",i,keyvalue)
  // let wet=keyvalue[1]
  // console.log("wet",typeof wet)
  // console.log(wet)
  // var array=keyvalue.map(([key,value])=>{
  //   if(key.startsWith('value')){
  //     console.log("the value of first",i,value)
  //     return value;
  //   }
  // })
  // console.log(array)
//   console.log(value)
//   var arr=value.map((val)=>{
//     if (val.status==="fulfilled"){
//       return val.value
//     }
//   })
//   console.log(arr)


})

// Assuming a, b, c, and d are Promises or asynchronous functions returning Promises


const promisesArray = [a, b, c, d];
console.log("dfg",typeof promisesArray)
// Use Promise.allSettled to wait for all Promises to settle (fulfill or reject)
const promiseall = Promise.allSettled(promisesArray);

promiseall.then(results => {
    console.log(results)
    console.log(typeof results)
    // Use Array.map() to extract only the values from the resolved promises
    const valuesArray = results.map(result => {
      console.log("dfgdfb",result[0])
      // Check if the promise was fulfilled (status: "fulfilled")
      if (result.status === "fulfilled") {
        // Extract and return the value from the resolved promise
        return result.value;
      }
    });

    console.log(valuesArray); // This will contain only the resolved values
  })
  .catch(error => {
    // Handle errors, if any of the promises rejected
    console.error("Error occurred:", error);
  });


const dataObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};


const specificKey = 'key';

// Step 1: Get an array of key-value pairs using Object.entries()
const keyValueArray = Object.values(dataObject);
console.log("hi",keyValueArray)
// Step 2: Use Array.map() to extract the desired values (based on the specific key)
let keyValueArra=[2,3,4]
const valuesArray = keyValueArray.map(([key,value]) => {
  if (key) {
    return value;
  }
});

console.log(valuesArray);



