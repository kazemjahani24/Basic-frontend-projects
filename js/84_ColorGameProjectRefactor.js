/*
this lesson mostly on refactoring and simplyfing the code
*/
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messegeDisplay  = document.querySelector("#message");
var h1  =document.querySelector("h1");
var resetButton = document.querySelector("#reset");

//1.2_ next we delete these two buttons for hard and easy and make button.
///var easyBtn = document.querySelector("#easyBtn");
///var hardBtn = document.querySelector("#hardBtn");
 var modeButtons = document.querySelectorAll(".mode");

 //1.3_then we will loop through modeButtons
 for(var i = 0; i<modeButtons.length;i++){
     modeButtons[i].addEventListener("click",function(){
         //1.4_here we are removing the class selected properties from
         // both and adding it to the one which is clicked.
        
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected")
         this.classList.add("selected");

        this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
        reset();
        //beside using the loops below, we can use the ternary operator
         //which will be done in the lines above:
         ///if( this.textContent ==="Easy"){
             ///numSquares= 3;
         ////}
         ///else{
            /// numSquares = 6;
         ///}


         //how many squares to show
         // pick new colors
         // pick  a new pickedColor(which is the color we are trying to click on)
         // update page to reflect changes
      
     });   
 }
/*
1.5_to the 4 functions above we will create a new function, because we will
do some of the things more than once so we dont want to repeat them
over and over again.

2_now we can call that function to where we are looping for the mode button,
but there is one problem with that is  we need it to be 3  colors when 
we are clicking on the easy button and we want 6 colors when click on
the hard button. to fix that problem, can just add an if statement to day
if the easy button was clicked, then give 3 colors else give 6 colors.
*/

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    
    resetButton.textContent = "New Colors";


    
    messegeDisplay.textContent = "";
    
    for(var i = 0; i<squares.length;i++){
         //3.1_ here what we will make the game to only give us 3 colors
        //when we click on the easy mode.
        if(colors[i]){

            squares[i].style.display = "block";
          /*
          3.2_ but now we have another problem which is of we click on
           easy button, we will get 3 squares, and when we click on the 
           hard button, we will get 3 colors as well and that is not what
           we want, we only want to get 3 colors when we click on the easy
           and when click back on the hard button we want to get 6 colors.
          */
         
  
              squares[i].style.backgroundColor = colors[i];
          }
          else{
              squares[i].style.display = "none";
          }
    }
   
     h1.style.background = "steelblue";
}



resetButton.addEventListener("click",function(){
    //here we removed all the codes and just called the reset function which 
    // all the functions that we need.
    reset();
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

1_first thing i wanna  discuss about refactoring the game about the buttons,
as we can see in our code both hard and easy button does the same thing,
only the easy button will give three squares and the hard button will give
 six buttons so what we can do is we can use a class for both of them and
 write code once and make it work for both of them.

 3._ next we want to work on the easy button to give us 3 squares because
 now it will give us 6 squares.

 4_ there is one more place that we can use our  reset function which is 
 the place where our page is loaded.



*/


