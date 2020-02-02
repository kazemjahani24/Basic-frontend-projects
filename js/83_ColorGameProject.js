/* 
this video is mostly on styling the  interface of the game and make it
look nicer and being able to view everything better.
*/
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messegeDisplay  = document.querySelector("#message");
var h1  =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){

   
    hardBtn.classList.remove("selected");

   easyBtn.classList.add("selected");

   numSquares = 3;
   
  
   colors = generateRandomColors(numSquares);

 
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    
    for(var i = 0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";

        }

    }
});

hardBtn.addEventListener("click",function(){

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;

   
    colors = generateRandomColors(numSquares);

    
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
    
     for(var i = 0; i<squares.length;i++){
             squares[i].style.backgroundColor = colors[i];
        
             squares[i].style.display = "block";
     }

});
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    //21.1_ 
    this.textContent = "New Colors";


    //20.1_ the line below  will make the message correct or try again
    // to go away when we click in the new colors button.
    messegeDisplay.textContent = "";
    
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //17.2_ we want to change the color of background of h1 to be steelblue
     //h1.style.background = "#232323";
     h1.style.background = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
       
    var clickedColor =  this.style.backgroundColor;

    if(clickedColor ===pickedColor){
        messegeDisplay.textContent = "Correct";

       
        resetButton.textContent = "Wanna Play Again?!";

        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;

    }
    else{

        this.style.backgroundColor = "#232323";

        messegeDisplay.textContent = "Try Again";
    }
    
    });
}

function changeColor(color){
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
      
}

function pickColor(){
   
    
    var random  =Math.floor(Math.random() * colors.length);
    return colors[random];
   
      
}
function generateRandomColors(num){
var arr = [];
for(var i  =0 ; i<num;i++){

    arr.push(randomColor())


}
    return arr; 
}
function randomColor(){

   var r =  Math.floor(Math.random()*256);

    var g =  Math.floor(Math.random()*256);

    var b =  Math.floor(Math.random()*256);

   return "rgb(" + r + ", " + g + ", " + b + ")";


}

/*
14_ now we work on adding the easy and hard buttons to the game
which is impacting the level of the difficulty of the game. when we load
 the page, hard is already selected  so we see 6 different squares.
 next we want to get the class to feflect which one(easy or hard is selected
    (turn blue)).next up we want to change the difficulty level of each button
    when we click it. so the process is when we click on the easy button, we are
    going to generate three new colors.

    15. when we click on the easy button, we want to generate new colors.

    16. we are good to gos so far,however,we have one small problem in the
    easy mode is that when we click new colors, it will give six different
    colors, but it wont be shown on the display and that is because we 
    . we are not keeping the track of which mode are we playing.we will
    fixt that.


    17.in this lesson we want to work on the styling, so we will mostly 
    work on css.

    18_now its time to work on the buttons to make them more of the hover


    19_next we will talk bout the styling of the six squares to make them
    nice dice looking squares. after that we want to make the squares to 
    take a little bit of time when we click on it to fade out or fade in,
    and for that we can use the same transfrom property we used to make 
    the buttons to fade in and out when we hover over them.

    20_ next the slight change that we want to make is when we click on
     the new colors button, the textt to the roight of it does not go away,
      which is correct or try again, and for that we need to make a small
       change in the js code.

       21_ next thing  which needs Changing is the playagain button when
       we win the game, we want it to only say playagain once the user 
       wins the game it says play again once we click on it it should go 
       back to new colors. to be more precise, we only want to see 
       play again when only the user wins the game.


*/


