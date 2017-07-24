namespace Semesteraufgabe {
    export class RegularFish extends Fish {
        x: number;
        y: number;
        color: string;
        
        
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.setRandomStyle();
            this.setRandomFirstPosition();
            }
        
        update(): void {
            this.drawRegularFish();
            this.setRandomFirstPosition();
            this.move();
            }
        

      drawRegularFish(): void {
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
        //crc2.arc(_x + 7, _y, 20, 0, 2 * Math.PI);
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
            this.x += Math.random() * 5 - 2;
            this.y += Math.random() * 9 - 5;
           
                        
            
            if (this.x < 0) {
                this.x = 1000;
                }
            if (this.y < 0) {
                this.y = 700;
                }
            if (this.y > 700) {
                this.y = 0;
                }
            }
        
setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
            }
    
setRandomFirstPosition(): void {
           this.x += Math.random() * 10;
           this.y += Math.random() * 5;     
}
        
        }
    }


