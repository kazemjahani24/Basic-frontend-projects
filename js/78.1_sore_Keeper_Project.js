/*
for making a button work or make it functional or adding an event to it
, we need to first select its id, or class or element as shwon below and 
then we need to  to add the eventListener to it and  add the logic to the
added eventListener.
*/
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton  = document.getElementById("reset");
/*
3_next we want to change the content of the paragrpah when we want to
 work on the input, for example we will just give the input a value of 7
 and the  value of the paragraph above the input should change to the calue 
 of the the value that we put in the input.
*/
var winnigScoreDisplay = document.querySelector("p span")
//var paragraph  = document.querySelector("p");

// the line below is just in case of we have other inputs so we can select
// the id of the input that we want
var numInput = document.querySelector("input");


var p1Score = 0;
var p2Score = 0;
var gameOver  = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){

    if(!gameOver){
    
    p1Score++;
        if(p1Score===winningScore){

            //1_the line below will turn the winnig players number to green when he wins and for
            // 1_this example we are using the winning number as 5.
            p1Display.classList.add("winner");

           gameOver = true;
        }
    p1Display.textContent = p1Score;
    }

});

p2Button.addEventListener("click",function(){
    if(!gameOver){
    p2Score++;
    
    //3_ using console.log is one of the very famous ways to debug our codes.
    console.log(p1Score,winningScore);
    if(p2Score===winningScore){

         //1_the line below will turn the winnig players number to green when he wins and for
        // 1_this example we are using the winning number as 5.
        p2Display.classList.add("winner");
        gameOver = true;
    }
    p2Display.textContent = p2Score;
    }
  });

  //2_the line below is to make the reset button to work.
  resetButton.addEventListener("click",function(){
      p1Score = 0;
      p2Score = 0 ;
      p1Display.textContent = 0;
      p2Display.textContent = 0;
      p1Display.classList.remove("winner");
      p2Display.classList.remove("winner");
      gameOver = false;
      reset();



  });

  /*
  4_ in the line below we are creating a new function called, reset 
    so that if we change the winning score in the middle of the game 
    then it will be reset.
*/

function reset(){
    p1Score = 0;
    p2Score = 0 ;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;


}

  /*
       3_as you can see in the line below we are using the change event and what
        this one does is it will run anytime the value changes and it does not
        matter how that value changes.
  */
  numInput.addEventListener("change",function(){
      winnigScoreDisplay.textContent   = numInput.value;

      /*
      3.1_adding the line below to the code will create a bug in the code
      and that bug is basically when we increase the value of players
      the value is not going to stop at the value that we put in the input.
      
      3.2_the problem is as soon as we change the value of playing to: 5
      to any number then it will give us the winning score as a string 
      and not a number, so this is the problem created.
       we can change the triple equals to double equals, so that it only
       compares the values and not the types of datatype, or just   change
       the numInput.value into a string as it is done below   
      */
         //winningScore = numInput.value;
         winningScore = Number (numInput.value);
         reset();
   
  });


  /*
  4_ the final thing that lets say now the winning core is 5, but when
  we reach 3 then we change our mind to change the winning score to 2, 
  however, we have already reached 3 now and now we changed the
  winning value to be 2, now if we keep on going, nothing will happen 
  because we already changed the value and we are in the middle of the game.
  to fix that we can make the game to be reset if anytime we plan to change 
  the winning score in the middle of the game.
  
*/
  

