namespace Abschlussaufgabe {

    export class Won {

        constructor() {
            
            this.drawScreenAndText();
            
            }
        
        drawScreenAndText(): void {
            
            tweety.fillStyle = "#CED8F6";
            tweety.beginPath();
            tweety.rect(20, 20, 800, 460);
            tweety.globalAlpha = 0.8;
            tweety.closePath();
            tweety.fill();
            
            
            tweety.fillStyle = "white";
            tweety.font = "30px Arial";
            tweety.textAlign = "center";
            tweety.fillText("Hey! You helped Tweety", 1000 / 2, 500 / 2 - 55);
            tweety.fillText("collect all the bugs.", 1000 / 2, 500 / 2 - 20);
            tweety.fillText("Now she can go back to her family.", 1000 / 2, 500 / 2 + 20);
            tweety.fillText("Thanks for your help!", 1000 / 2, 500 / 2 + 55);
            
            
            }
        
        }
}