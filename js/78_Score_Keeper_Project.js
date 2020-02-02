var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
//h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");


// in the line below we are just creating a variable and we are just 
// assinging it to zero, and this value will increase anytime that we click  on the buttons accordingly. 
// as we have asked it to do in the function in the lines below.
var p1Score = 0;
var p2Score = 0;
var gameOver  = false;
var winningScore = 5;





//the first thing that we want to add is the event listener when we
//click the button  the value of the zero should increase.

p1Button.addEventListener("click",function(){

    if(!gameOver){
    
    p1Score++;// this line means when we click on the button, it increases the value of h1.
        if(p1Score===winningScore){
           gameOver = true;
        }
    p1Display.textContent = p1Score;// and this line will equal the value of h1 to the value p1Score everytime its clicked.
    // how ever the problem in the line above is that it will change the  whole thing, so we 
    //we need to add span to our h1 so that it only changes the value of the needed one(left or right one in h1 element)
    }

});

p2Button.addEventListener("click",function(){
    if(!gameOver){
    p2Score++;
    if(p2Score===winningScore){
        gameOver = true;
    }
    p2Display.textContent = p2Score;
    }
  });






