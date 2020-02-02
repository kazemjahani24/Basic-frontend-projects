

/*
12.1_in the line below, we change the hardcoded array to make it
randomly choose an rgb color and for that we will create a different 
function and it will take an argument on how many colors it should generate,


*/
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
///var pickedColor = colors[0];
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messegeDisplay  = document.querySelector("#message");

//12.5_now in the line below, we select h1 to change its color to be the 
//same color as the correct selected random color.
var h1  =document.querySelector("h1");

//13.3 now we work on the button to reset the game.
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){

    //13.4_generate new colors when clicked
    colors = generateRandomColors(6);

    //13.5_ pick a new random color from array
    pickedColor = pickColor();

    //13.6_change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //13.7_change the colors of the squares on the page
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];

    }
    //13.9_ last thing is we wanna change the background color of  h1 back
    // to black
    h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
       
    var clickedColor =  this.style.backgroundColor;

    if(clickedColor ===pickedColor){
        messegeDisplay.textContent = "Correct";

        //13.8_now we will add the function that if we win it 
        //it will ask us that do we want to play again or not.so we want to
        // just change the content of the new colors button.
        resetButton.textContent = "Wanna Play Again?!";

        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;

        //12.5 when the user guesses the color correctly, then the 
        // color of h1 will be same as the color of rgb generated color

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
//12.2_generating random colors
function generateRandomColors(num){
//make an array
var arr = [];
//repeat num times
for(var i  =0 ; i<num;i++){

    //12.5_get random color and push into array
    arr.push(randomColor())


}
    //return that array.
    return arr; 
}
//12.3_
function randomColor(){

    // pick a "red" from 0 - 255
   var r =  Math.floor(Math.random()*256);

    //pick  a "green" from 0 - 255
    var g =  Math.floor(Math.random()*256);

    //pick a "blue" from 0 -255
    var b =  Math.floor(Math.random()*256);
//12.4_now the worst part is syntysizing them into the format of rgb
//which is format of string "rgb(r, g, b)"
   return "rgb(" + r + ", " + g + ", " + b + ")";


}



 /*
    8_ now it is time to add the logic for click events. we when 
    i click on one of the squares, we want to run some code which 
    is going to figure out which color the square is that we clicked on
    omce we have that color we  are going to compare it to the picked color
    and if they are different, we are gointg to change the background 
    color of that square so that it goes to the same color as the
     backgound of the body, and if they are same, that means the player 
     has won and we need to do some special things, and if they are 
     different, that means the player picked the wrong color and we need 
     to handle that too. so first lets add an eventHandler for each of the 
    events that we have. and for that we can use the for loop above:


    9_now  it is time to add in on some of the behaviour for when we
    click the right color or when i clicked the wrong color.

    10_now we want to add the feature where if we get the right answer,
    then the color of all squares change to the correct color. also we can 
    work on the background of h1   

    11_ next we need to focus on getting the random color from the array
    and the picking a random color from that array.

    12_next we want to make to not choose the only the six colors that we 
    have given it every single time. instead we want to generate 6 random
    colors, then , we fill the array with the 6 generated  colors then
    and we want to pick from those six random colors.

    13_ now we are gonna add some of the features, the first one is when
    i win the game, it tells me correct and then i can click play again
    to get new colors. and if i havnt won yet but i want new colors, i can
    also click on the new colors button then come to easy and hard mode
    at the end

    */