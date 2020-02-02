/*var posts = [
    {
        title:" cats are mediocre",
        author:"Colt",
        comments:["Awesome post", "terrible post"]
    },
 
    {
       title: " cats are actually awesome" ,
       author:" kazem",
       comments:["<3", "go to hell, i hate you"]
 
    }
  ]
 */

 var movies = [
     {
     title:"In Brugs",
     watchProperty:true,
     rating:5

     },
{
     title:"Frozen",
     watchProperty:false,
     rating:4.5
    
},

{
    title:"Lord of the rings",
    watchProperty:false,
    rating:7 
}

 ]
 function buildString(movie){
    var result = "You have ";
    if(movie.watchProperty){
        result +="watched ";
    }
    else{
        result+="not seen ";
    }

    result+= "\"" +movie.title + "\" - ";
    result+=movie.rating + " stars";
   return result;
 }

 movies.forEach(function(movie){
     console.log(buildString(movie));

 });
