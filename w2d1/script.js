console.log("hey there from the script file!");

var count = 0;

function alertMe(element) {
    count++;
    element.innerText = "clicked x" + count;
}

function hoverOver() {
    console.log("hovered!");
}

var header = document.getElementById("header");
var input = document.getElementById("input");

function changeText() {
    // take text from input
    var text = input.value;
    // set header to be that text
    header.innerText = text;
}