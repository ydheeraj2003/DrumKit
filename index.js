function makeSound(key)
{
    switch(key)
    {
        case "w":
            const tom1=new Audio("sounds_tom-1.mp3");
            tom1.play();
            break;

        case "a":
            const tom2=new Audio("sounds_tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3=new Audio("sounds_tom-3.mp3");
            tom3.play();
            break;

        case "d":
            const tom4=new Audio("sounds_tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            const snare=new Audio("sounds_snare.mp3");
            snare.play();
            break;
    
        case "k":
            const crash=new Audio("sounds_crash.mp3");
            crash.play();
            break;

        case "l":
            const kick=new Audio("sounds_kick-bass.mp3");
            kick.play();
            break; 
    }
}

function animation(key)
{
    const b=document.querySelector("."+key);
    b.classList.add("pressed");

    setTimeout(function(){
        b.classList.remove("pressed");
    },100);
} 



