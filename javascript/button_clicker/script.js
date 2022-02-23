var login = document.getElementById("login")

function loginButton(){
    if (login.innerText == "Login"){
        login.innerText = "Logout"
    }
    else{
        login.innerText = "Login"
    }
}

var definitionButton = document.getElementById("addDefinition")

function addDefinition(){
    definitionButton.remove()
}

function likeAlert(){
    alert("Ninja was liked")
}