document.querySelector("form").addEventListener("submit",mysignin)
let dataset= JSON.parse(localStorage.getItem("details")) || []
function mysignin(event){
    event.preventDefault()
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value

   

   for(let i=0;i<dataset.length;i++){
    if(email==dataset[i].email && password==dataset[i].password ){
        alert("logged in")
        
        // window.open("body.html")
    }else if(email !==dataset[i].email){
        alert("Incorrect email")
    }else if(password !==dataset[i].password){
        alert("Incorrect password")
    }
}
}