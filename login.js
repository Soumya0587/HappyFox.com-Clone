document.querySelector("form").addEventListener("submit",mysignin)
let dataset= JSON.parse(localStorage.getItem("details")) || []
function mysignin(event){
    event.preventDefault()
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value

   
    let flag=false
   for(let i=0;i<dataset.length;i++){
    if(email==dataset[i].email && password==dataset[i].password ){
        
        flag=true
        // window.open("body.html")
    
}
}
 if(flag){
    alert("logged in")
}else{
    alert("Incorrect details")
}
}