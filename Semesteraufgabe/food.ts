namespace Semesteraufgabe {
    export class Food {
        x: number;
        y: number;
        
        
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.drawFood();
            this.move();
            
            }
        
        
        drawFood(): void {
            crc2.beginPath();
            crc2.fillStyle = "#ACFA58";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x + 7, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
        
        //zufaellige Bewegungsrichtung
        move(): void {
            this.y += Math.random() * 10;
                      
     }
  }
}