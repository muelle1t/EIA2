namespace Aufgabe8_Bienen {
    export class HoneyBee extends Bees {
        xTarget: number;
        yTarget: number;
        speed: number;
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            this.speed = 0.3;
            this.setStartPosition();
            this.setRandomTargetPosition();
            
            }
        
              
        
        
        setRandomTargetPosition(): void {
            let randomTargetFlower: number = Math.round(Math.random() * (nectarFlowers.length - 1));
            this.xTarget = nectarFlowers[randomTargetFlower].x;
            this.yTarget = nectarFlowers[randomTargetFlower].y;    
        }
        
        setStartPosition(): void {
            this.x = 250;
            this.y = 620;
        }
        
        
        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
                }
            }
        
          drawBee(): void {
           //abstract 
        }
              
        }
    

}