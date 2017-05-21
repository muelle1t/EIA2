namespace Aufgabe8_Bienen {
    export class RegularBee extends Bees {
        x: number;
        y: number;
        color: string;
        direction: number;
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            
            
            }
        
              
        drawBee(): void {
            //abstract
        }
        
        move(): void {
            this.x += Math.random() * 3 - 2 + this.direction;
            this.y += Math.random() * 4 - 2;
           
        }
   } 

}