namespace Aquarium {
    export class RegularFish {
        x: number;
        y: number;
        color: string;
       
        
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.setRandomStyle();
            this.drawFish();
            
            }
        
        update(): void {
            this.setRandomStyle();
            this.drawFish();
            this.move();
            }
        

      drawFish(): void {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.fillStyle = this.color;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 20, this.y - 15);
        crc2.lineTo(this.x - 20, this.y + 15);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        
        //Körper
        crc2.beginPath();
        crc2.fillStyle = this.color;
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
move(): void {
            //abtsract
    
           
             }
        
setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
            }
        


    }
}