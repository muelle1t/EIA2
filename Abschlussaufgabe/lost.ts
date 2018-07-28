namespace Abschlussaufgabe {

    export class Lost {

        constructor() {
            
            this.drawScreenAndText();
            
            }
        
        drawScreenAndText(): void {
            
            tweety.fillStyle = "#000033";
            tweety.beginPath();
            tweety.rect(20, 20, 800, 460);
            tweety.globalAlpha = 0.8;
            tweety.closePath();
            tweety.fill();
            
            
            tweety.fillStyle = "white";
            tweety.font = "30px Arial";
            tweety.textAlign = "center";
            tweety.fillText("Tweets was stung by to many bees!", 1000 / 2, 500 / 2 - 55);
            tweety.fillText("You have to start again!", 1000 / 2, 500 / 2 - 20);
            tweety.fillText("Just reaload the page", 1000 / 2, 500 / 2 + 20);
            tweety.fillText("and you can help Tweety, again.", 1000 / 2, 500 / 2 + 55);
            
            
            }
        
        }
}