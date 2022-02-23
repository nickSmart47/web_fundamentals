// Removes Join button on click
function join(element) {
    element.remove();
}


// Alerts user with value of their search input
function searchAlert() {
    var searchValue = document.getElementById("searchbar").value;
    alert(`You are searching for  "${searchValue}"`);
}

// Adds one to the 'likes' counter for each click of heart button
function increaseLikes(element) {
    var likes = element.innerText;
    likes++
    element.innerHTML = `<img class="heart-icon" src="./imgs/heart.png" alt="Heart">  ${likes}`
}