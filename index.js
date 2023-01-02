const tapArea = document.querySelector(".tap-area");
const screenWidth = screen.width;
let bubbleSize = "calc(10px + 2vw)";

let bubbleType = "circle";


console.log(screenWidth);

tapArea.addEventListener("click", function(e){
    console.log("i got clicked");
    let tapMouseXPosition = e.clientX;
    let tapMouseYPosition = e.clientY;

    console.log("xpos is " + tapMouseXPosition  + " ypso is " + tapMouseYPosition);

    createBubbleDiv(tapMouseXPosition, tapMouseYPosition);

    setTimeout(function(){
        document.querySelector(".new-bubble").remove();
    },5000);


});

function createBubbleDiv(posX, posY){
    let bubble = document.createElement("div");
    bubble.className = "new-bubble";
    bubble.style.borderRadius = "50%";
    bubble.style.backgroundColor = "#fff";
    bubble.style.height = bubbleSize;
    bubble.style.width = bubbleSize;
    bubble.style.position = "absolute";
    bubble.style.top = posY + "px";
    bubble.style.left = posX + "px";

    tapArea.appendChild(bubble);
}

