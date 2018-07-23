namespace Abschlussaufgabe {

    export class Cloud {

        x: number;
        y: number;

        

        moveCloud(): void {
            this.x += 1;
            if (this.x > 1050) {
                this.x = - 10;
            }




        }

        //Wolken aus 3 Kreisen
        drawCloud(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.beginPath();
            crc2.arc(this.x, this.y, 25, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 15, 30, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 35, this.y - 3, 25, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

        }
    }

}