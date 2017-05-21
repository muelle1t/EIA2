namespace Aufgabe8_Bienen {
    export class Bees {
        x: number;
        y: number;
        color: string;
        direction: number;
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.setRandomStyle();
            }
        
        update(): void {
            this.drawBee();
            this.move();
            }
        
        drawBee(): void {
           //abstract
        }
        
         move(): void {
            this.x += Math.random() * 3 - 2 + this.direction;
            this.y += Math.random() * 4 - 2;
            
         }
            
               
        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
            }
        
        }
    

}