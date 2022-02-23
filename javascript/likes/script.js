var postOne = document.getElementById("postOne");
var postTwo = document.getElementById("postTwo");
var postThree = document.getElementById("postThree");

postOneLikes = parseInt(postOne.innerText, 10);
postTwoLikes = parseInt(postTwo.innerText, 10);
postThreeLikes = parseInt(postThree.innerText, 10);

// numLikes = [postOneLikes, 
//     postTwoLikes,
//     postThreeLikes
// ]

// function likePost(postNumber){
//     post = numLikes[postNumber]
//     post += 1
//     postNumber.innerText= post
// }

function likePostOne(){
    postOneLikes += 1
    postOne.innerText= postOneLikes
}

function likePostTwo(){
    postTwoLikes += 1
    postTwo.innerText= postTwoLikes
}

function likePostThree(){
    postThreeLikes += 1
    postThree.innerText= postThreeLikes
}