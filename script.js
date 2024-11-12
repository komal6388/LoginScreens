let nam = ()=>{
 let span = document.querySelector("#span1")
  let span1 = document.querySelector("#name")
  if(span1.value==""){
  span.innerText = "required"
    
  }
  else{
    span.innerText = "✔️ "
    
  }
}
let mail = ()=>{
  let span = document.querySelector("#span2")
   let inp2 = document.querySelector("#email")
  if(inp2.value==""){
    span.innerText = "required"
    
  }
  else{
    span.innerText = "✔️"
   
  }
}
let call = ()=>{
  let span = document.querySelector("#span3")
   let inp2 = document.querySelector("#phone")
  if(inp2.value==""){
    span.innerText = "required"
    
  }
  else{
    span.innerText = "✔️"
   
  }
}
let radio = ()=>{
  let inp1 = document.querySelector("#name")
   let inp2 = document.querySelector("#email")
   let inp3 = document.querySelector("#phone")
  let span = document.querySelector("#span4")
   let inp4 = document.querySelector("input[name='gender']:checked")
   let span1 = document.querySelector("#span1")
   let span2 = document.querySelector("#span2")
   let span3 = document.querySelector("#span3")
 if(inp1.value==""||inp2.value==""||inp3.value==""||inp4==null){
   if(inp4==null){
     span.innerText = "required"
   }
   else{
     span.innerText = "✔️"
   }
   if(inp1.value==""){
     span1.innerText = "required"
   }
   else{
      span1.innerText = "✔️"
   }
   if(inp2.value==""){
      span2.innerText = "required"
    }
    else{
       span2.innerText = "✔️"
    }
   if(inp3.value==""){
     span3.innerText = "required"
   }
   else{
      span3.innerText = "✔️"
   }
   alert("kindly fill each section")
   return
 }
  else{
    alert("form is submited")
  }
}
let red = ()=>{
  let span = document.querySelector("#span4")
  span.innerText = "✔️"
}