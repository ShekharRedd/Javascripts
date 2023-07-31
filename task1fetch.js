function getdata(){
  console.log("hi")
  const ur = document.getElementById("url").value.trim();
  console.log(ur)
// console.log(ur.getAttribute('value'))
// let url=ur.getAttribute('value')
//   // console.log("https://jsonplaceholder.typicode.com/posts/1")
//   // let rt=fetch("https://jsonplaceholder.typicode.com/posts/1")
  let rt=fetch(ur)

  rt.then((value)=>{
    if(value.ok){
      return value.json()
    }

  })
  .then((value)=>{
    console.log(value)
    see.innerHTML=value.body
  })
}
