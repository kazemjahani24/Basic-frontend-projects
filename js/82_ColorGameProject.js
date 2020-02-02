// 16.4_in the line below, we are chaning the hard coded number to be able to
//to track the mode which is hard or easy.
///var colors = generateRandomColors(6);
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messegeDisplay  = document.querySelector("#message");
var h1  =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//16.3 now we will create a variable to keep track of which more are we on
var numSquares = 6;

//14.1_ here whe are selecting the buttons to make them functionl.
easyBtn.addEventListener("click",function(){

    //14.3_ the line below will remove the blue color from the hard button WHEN
    //we click the easy button.
    hardBtn.classList.remove("selected");

   //14.2 the line below is how we can make it to stay blue when we click it
   easyBtn.classList.add("selected");

   numSquares = 3;
   
    //in the line below we will make the number of generated colro
   //15.1_ the line below is to generate new colors.
   colors = generateRandomColors(3);

   //15.2_ we want pick a new picked color
    pickedColor = pickColor();

    //15.3_ next we want to display the new picked color in the header.
    colorDisplay.textContent = pickedColor;

    //15.4_ next first we want to pick the three colros then
    // we want to hide the three colors in the easy mode,and that
    // can be done using the display none property.
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

    //16.1 first we need to add the same thing for the hard button as we 
    //added for the easy button.
    colors = generateRandomColors(numSquares);

    
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
    
     for(var i = 0; i<squares.length;i++){
             squares[i].style.backgroundColor = colors[i];
             //16.2_ we are adding block to hardmode because we dont
             // want to have 3 colors as the easy mode
             squares[i].style.display = "block";
 
         
 
     }

});

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
     h1.style.background = "#232323";
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
    fixt that



*/


