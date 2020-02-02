/*
 1_first we will ranodomize 6 colors which  are always the same, 
then we will move on with the next complicated things.
*/


var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

/*2_ next we need to loop through this array and assign each one of the
colors above to each of the six divs we have created in our html file */
var squares = document.querySelectorAll(".square");



/*
3_next we need to make it to give the color rgb code and we  choose
it from the 6 given colors.
 */

 /*
 11.1_ now we want to make the color to pick a random color, and for
 that we need create a funcion and change the code below, to make it
 to choose the color randomly.
 */
///var pickedColor = colors[0];
var pickedColor = pickColor();


/*
5_ now we  select the id for the span we creatd inside the h1 so
that we can manipulate it.
*/
var colorDisplay =document.getElementById("colorDisplay");

// 9.3_in the line belowe we are selecting the div we created for the
// correct or try again messege.
var messegeDisplay  = document.querySelector("#message");

/*6_ 
and then we want to update the color to be same as the color that
we picked
*/
colorDisplay.textContent = pickedColor;



for(var i = 0; i<squares.length;i++){
    //add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];

    // 8.1_add click listeners to squares:
    squares[i].addEventListener("click",function(){
       
    
    //8.2_grab color of clicked square
    var clickedColor =  this.style.backgroundColor;
    //compare the color to picked color
    if(clickedColor ===pickedColor){


        //9.5_if the guess is correct then message is  = tryAgain
        messegeDisplay.textContent = "Correct";
        
        //10.2_we need to pass the correct colors which is 
        //the variable we created in the line above(clickedColor)
        changeColor(clickedColor);

        

    }
    else{
        
        /*
        9.1_ in the line below, what will happen is that if the color
        is not matching and it is the wrong one, then the make
        the  color of the wrong one same as the background color
        so that it fades out.
        */
        this.style.backgroundColor = "#232323";

        //9.4_if the guess is wrong then message is  = tryAgain
        messegeDisplay.textContent = "Try Again";


        
    }
    
    });

   
}

/*
10.1_ the function below is to change the color of all the squares
if we click the right color.  the color of all the squares will change to
the correct color.
*/
function changeColor(color){
    //loop through all squares.
    for(var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color. 
      
}

function pickColor(){
    /*
    in this function we need to do two things:
    one is to pick a random number, for example index of 0 or 1 or 2
    from the array and return that color.
    then we need to use that number to access the array
    */
    
    // in js to pick a random number we can use the function below
    var random  =Math.floor(Math.random() * colors.length);
    return colors[random];
   
      
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

    */