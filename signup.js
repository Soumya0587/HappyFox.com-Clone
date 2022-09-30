document.querySelector("form").addEventListener("submit",mysignup)
let arr=JSON.parse(localStorage.getItem("details")) || []
function mysignup(event){
    event.preventDefault()
    
    var user={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        company:document.querySelector("#company").value,
        chat:document.querySelector("#chat").value,
        dept:document.querySelector("#dept").value
    }
    arr.push(user)
    
    localStorage.setItem("details",JSON.stringify(arr))
    window.open("login.html")
}