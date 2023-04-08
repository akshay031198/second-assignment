"use strict";

let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber)
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1)

$(".role").on("click", function(){
if(randomNumber > randomNumber1){
    $(".rell").text("PERSON 1 WINS");  
  }
else if(randomNumber < randomNumber1)
{
 $(".rell").text("PERSON 2 WINS");   
}
else{
    $(".rell").text("No one wins Play again");   
}
if(randomNumber === 1){
    $(".die1").toggle("hidden")  
}else if(randomNumber === 2){
    $(".die2").toggle("hidden")
   }
else if(randomNumber === 3){
    $(".die3").toggle("hidden")
      
}
else if(randomNumber === 4){
    $(".die4").toggle("hidden")
     
}
else if(randomNumber === 5){
    $(".die5").toggle("hidden")
    
}
else{
    $(".die6").toggle("hidden")
}
if(randomNumber1 === 1){
    $(".ey1").toggle("hidden")  
}else if(randomNumber1 === 2){
    $(".ey2").toggle("hidden")
   }
else if(randomNumber1 === 3){
    $(".ey3").toggle("hidden")
      
}
else if(randomNumber1 === 4){
    $(".ey4").toggle("hidden")
     
}
else if(randomNumber1 === 5){
    $(".ey5").toggle("hidden")
    
}
else{
   // $(".diee6").toggle("hidden")
   $(".ey6").toggle("hidden")
    
}
});


