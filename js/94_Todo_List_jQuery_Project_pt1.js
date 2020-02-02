//1_
///$("li").on("click",function(){

    /* 
    5.2_the line below is the change that we made, and the explaination is:
    we wrote it that way is because we can only add a listener usingjQuery
    on elements that exist when the code below is run the first time, and 
    when this code is run the first time we dont have all the lis, we will
    be adding them according to our todo list. for example if we  hardcode
    only three lis in our html code, then the listener will be added only
    to those three, and it will not be added to the new ones which we will
    be adding later from the input new todo-list. so what we do instead is that
    we will add a listener to the entire ul parent, so anytime that we click
    on that ul,except when only li inside that ul is clicked, then only 
    run the code

    */
    $("ul").on("click", "li",function(){
    // the whole commented codes after the line below are replaces with 
    //one line of code, which is the line below.
    $(this).toggleClass("completed")

    /*
    //one trick in the line below is that we can use gray word, we need
    // to use the rgb vrsion of the color gray for it to work,otherwise
    // the console.log will not work
    if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration:"none"
            });
    }
    else{
        $(this).css({
            color: "gray",
            textDecoration:"line-through"
            });
    }
  */
});

//4.1_ in the second line below, we add the event object  in the function,
//then we will use that object to use stopPropagation.
//5.2 we need to change the code below as well if we want the listener 
//to work for all the potential elements.
  $("ul").on("click","span",function(event){
//$("span").on("click",function(event){
    event.stopPropagation();

    //"this in the line below refers to the span"
    $(this).parent().fadeOut(400, function(){

        //"this" in the line below,refers to the parent element of the span
        //which is the li.
        $(this).remove();
    });

});

//5_
$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        //the line below is grabbing new todo text from the input.
        var mylist = $(this).val();
        $(this).val("");

      // the append method can take a string of html and then it will
      //those elements to whatever we selected("which is the ul here")

      //6.1_ in the line below we will have to replace the x with the 
      // trash can icon so when we click on it, it will be deleted.
       /// $("ul").append("<li><span>X</span> "+ mylist + "</li>");
       $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ mylist + "</li>");
    }
    

});
$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();

})



