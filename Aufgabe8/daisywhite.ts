namespace Aufgabe8_Bienen {

    export class DaisyWhite extends Flower {
        

        constructor(_x: number, _y: number) {
            super(_x, _y);
            
        }
        
        
        

        drawDaisyWhite(): void {
            //grüner Stil
            crc2.beginPath();
            crc2.fillStyle = "#04B404";
            crc2.fillRect(this.x, this.y - 40, 4, 40);
            crc2.closePath();
            crc2.fill();

            //Blüten
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 40, 9, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 47, 9, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 33, 9, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 40, 6, 0, Math.PI * 2);
            crc2.fillStyle = "#F4FA58";
            crc2.fill();
        }





    }


}