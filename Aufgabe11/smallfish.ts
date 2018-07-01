namespace Aufgabe11 {
    
    export class SmallFish extends MovingObjects {
        
        constructor(_x: number, _y: number) {
            super(_x, _y);

}
        
    move(): void {
            this.x += 1;
            if (this.x > 1050) {
               this.x = - 10; 
            }
                       
            


        }
    
    draw(): void {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = "#00ffbb";
        crc2.fillStyle = "#00ffbb";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 20, this.y - 15);
        crc2.lineTo(this.x - 20, this.y + 15);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        
        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#00ffbb";
        //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Mund
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(this.x + 15, this.y + 5);
        crc2.lineTo(this.x + 25, this.y + 6);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    }
  }      
    
 }