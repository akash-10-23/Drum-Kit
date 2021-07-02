var chart = document.querySelectorAll(".drum").length;
for(var i=0 ; i<chart;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var btn = this.innerHTML;
        doSound(btn);
        btnAnimation(btn);
       
    });

}
document.addEventListener("keydown",function (event){

    var btn = event.key;
    doSound(btn);
    btnAnimation(btn);
});

function doSound(key){
        
    switch (key){
        case "w":
            var ad = new Audio("sounds/tom-1.mp3");
            ad.play();
            break;

        case "a":
            var ad = new Audio("sounds/tom-2.mp3");
            ad.play();
            break;

        case "s":
            var ad = new Audio("sounds/tom-3.mp3");
            ad.play();
            break;

        case "d":
            var ad = new Audio("sounds/tom-4.mp3");
            ad.play();
            break;

        case "j":
            var ad = new Audio("sounds/snare.mp3");
            ad.play();
            break;

        case "k":
            var ad = new Audio("sounds/crash.mp3");
            ad.play();
            break;

        case "l":
            var ad = new Audio("sounds/kick-bass.mp3");
            ad.play();
            break;
            
        default:
    }
   
}

function btnAnimation(ckey){
    var activeBtn = document.querySelector("."+ckey);
    activeBtn.classList.add("pressed");

    setTimeout(function (){
        activeBtn.classList.remove("pressed");
    },100);
}
