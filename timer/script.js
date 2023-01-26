window.onload = init;

var digit1
var digit2
var digit3
var digit4




function init(){
    digit1 = document.getElementById("dig1")
    digit2 = document.getElementById("dig2")
    digit3 = document.getElementById("dig3")
    digit4 = document.getElementById("dig4")

    

}


var timer = 1800;
var hours = Math.floor(timer/3600)
var minutes = Math.floor((timer - hours*60)/60)
var seconds = Math.floor(timer - hours*60*60 - minutes*60)


console.log(hours,minutes,seconds)

setInterval(function() {
    if((digit1.classList).length >= 3){
        digit1.classList.remove("num-undefined", "num-0", "num-1", 
                                "num-2", "num-3", "num-4", 
                                "num-5", "num-6", "num-7", 
                                "num-8", "num-9")
    };
    if((digit2.classList).length >= 3){
        digit2.classList.remove("num-undefined", "num-0", "num-1", 
                                "num-2", "num-3", "num-4", 
                                "num-5", "num-6", "num-7", 
                                "num-8", "num-9")
    };
    if((digit3.classList).length >= 3){
        digit3.classList.remove("num-undefined", "num-0", "num-1", 
                                "num-2", "num-3", "num-4", 
                                "num-5", "num-6", "num-7", 
                                "num-8", "num-9")
    };
    if((digit4.classList).length >= 3){
        digit4.classList.remove("num-undefined", "num-0", "num-1", 
                                "num-2", "num-3", "num-4", 
                                "num-5", "num-6", "num-7", 
                                "num-8", "num-9")
    };


    timer -= 1
    
    hours = Math.floor(timer/3600)
    minutes = Math.floor((timer - hours*60)/60)
    seconds = Math.floor(timer - hours*60*60 - minutes*60)
    console.log(hours,minutes,seconds)

    
    digit1.classList.toggle(`num-${Math.floor(minutes/10)}`)
    digit2.classList.toggle(`num-${minutes%10}`)
    digit3.classList.toggle(`num-${Math.floor(seconds/10)}`)
    digit4.classList.toggle(`num-${seconds%10}`)




}, 1000);