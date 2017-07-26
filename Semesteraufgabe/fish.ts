namespace Aquarium {

    export class Fish {
        x: number;
        y: number;
        direction: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            
            this.setRandomDirection();
            }
        
        update(): void {
            this.drawFish();
            this.move();
            this.setRandomDirection();
            }
        
        drawFish(): void {
           //draw
        }
        
         move(): void {
            //move
            
         }
            
               
        setRandomDirection(): void {
            this.direction = Math.round((Math.random() * 50) + 1000);
            }
        
        }
 
}