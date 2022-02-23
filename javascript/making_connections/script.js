var connectionNumber = document.getElementById("requests");
numConnections = connectionNumber.innerText;
numConnections = parseInt(numConnections, 10)

function addFriend(requestNumber){
    var request = document.getElementById(requestNumber);
    request.remove();
    numConnections ++;
    connectionNumber.innerText = numConnections
}

function denyRequest(requestNumber){
    var request = document.getElementById(requestNumber);
    request.remove();
    numConnections --;
    connectionNumber.innerText = numConnections
}

var userName = document.getElementById("username")

function editProfile(){
    if(userName.innerText == "Jane Doe"){

        userName.innerText = "Dohn Joe"
    }
    else{
        userName.innerText = "Jane Doe"
    }
}