namespace Aufgabe10 {

    export class BigFish {
        x: number;
        y: number;
        


        move(): void {
            this.x += 2;
            if (this.x > 1000) {
               this.x = - 10; 
            }
           
                       
            


        }

        drawBigFish(): void {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = "#f90261";
        crc2.fillStyle = "#f90261";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 30, this.y - 30);
        crc2.lineTo(this.x - 30, this.y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();


        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#f90261";
        crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x + 20, this.y - 7, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Mund
        crc2.beginPath();
        crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(this.x + 30, this.y + 12);
        crc2.lineTo(this.x + 15, this.y + 5);
        crc2.lineTo(this.x + 20, this.y + 24);
        crc2.arcTo(this.x + 20, this.y + 24, this.x + 30, this.y + 12, 25);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();


    }
    }

}
    
    
 