namespace Aufgabe11 {
    
    export class BigBubble extends MovingObjects {
        
         constructor(_x: number, _y: number) {
            super(_x, _y);

}
        
    move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 600;
            }

}
    
    draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.beginPath();
        crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
        crc2.fillStyle = "#c6e6ff";
        
        crc2.fill();
        crc2.closePath();
    }
  }      
    
 }