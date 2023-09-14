var addThis= document.querySelectorAll(".drum");

for(var i=0;i<addThis.length;i++){
    addThis[i].addEventListener("click",function(){
        var buttonLetter=this.innerHTML;
        makeSound(buttonLetter);
        makeAnimation(buttonLetter);
    });
}

document.addEventListener("keypress",function(event){ //putting event as parameter is an optional,defines that the function trigger that event take place inside function
       makeSound(event.key);    //key pressed from keyboard to trigger the event
       makeAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;

        case "a":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

        case "s":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;

        case "d":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

        case "j":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

        case "k":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

        case "l":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    
        default:
            console.log(buttonLetter);
            break;
    }
}

function makeAnimation(currentKey){
   var animate= document.querySelector("."+currentKey);
   animate.classList.add("pressed");

   setTimeout(function(){animate.classList.remove("pressed")},1000);
}