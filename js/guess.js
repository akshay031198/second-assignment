"use strict";

let randomNumber = Math.floor(Math.random() * 10 + 1);
let chances = 5;
document.querySelector(".match").addEventListener('click', function(){
    const userNumber = Number(document.querySelector(".guess").value)

   
if(chances > 1){
    if(userNumber=randomNumber){
        
    }
    else{
        if(userNumber>randomNumber?document.querySelector(".message").textContent = "guess low":document.querySelector(".message").textContent = "Guess high")

            document.querySelector(".message").textContent = "😡No Value😡";        
    }
}
});

