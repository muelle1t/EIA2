namespace Aufgabe8_Bienen {

    export class TulipPurple extends Flower {
        

        constructor(_x: number, _y: number) {
            super(_x, _y);
            
        }
        
        
        

        drawTulipPurple(): void {
            //grüner Stil          
            crc2.beginPath();
            crc2.fillStyle = "#04B404";
            crc2.fillRect(this.x, this.y - 25, 5, 40);
            crc2.closePath();
            crc2.fill();
            //Blüten 
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 30);
            crc2.arc(this.x, this.y - 35, 15, 0, Math.PI);
            crc2.fillStyle = "#BF00FF";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

        }




    }


}