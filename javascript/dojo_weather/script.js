function loadWeather(){
    alert("Loading weather report...");
}

var cookieMessage = document.getElementById("cookieMessage")
console.log(cookieMessage)

function removeCookieMessage(){
    cookieMessage.remove()
}


var temps = document.getElementsByClassName("temp");
// for(var i = 0; i < temps.length; i++) {
//     temps[i].innerHTML += 2
// }

function convertTemperature(unit){
    var temps = document.getElementsByClassName("temp");
    if (unit == "°F"){
        for(var i = 0; i < temps.length; i++) {
            var newtemp = temps[i].innerText;
            var newtempNumber = parseInt(newtemp, 10);
            newtempNumber = Math.round((newtempNumber * 9/5) + 32)
            temps[i].innerHTML = newtempNumber + "°"
        }
    }

    else if (unit == "°C"){
        for(var i = 0; i < temps.length; i++) {
            var newtemp = temps[i].innerText;
            var newtempNumber = parseInt(newtemp, 10);
            newtempNumber = Math.round((newtempNumber - 32) * 5/9)
            temps[i].innerHTML = newtempNumber + "°"
        }
    }

}