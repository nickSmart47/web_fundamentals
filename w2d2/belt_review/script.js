var bannerImage = document.querySelector("#banner-image");
var itemCount = 0;
var countItems = document.querySelector("#cart-items")
countItems.innerText = itemCount

function nextImage(){
    bannerImage.src = "img/ninja.png"
}

function backImage(){
    bannerImage.src = "img/cave.jpg"
}

function addItem(){
    itemCount++;
    countItems.innerText= itemCount;
}

function linuxAlert(){
    alert("This game is supported on Linux")
}