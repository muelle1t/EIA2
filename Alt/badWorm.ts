namespace Abschlussaufgabe {

    export class BadWorm extends Worm {

        x: number;
        y: number;



        constructor() {

            super();

            console.log("BadWorm");

            this.randomPosition();
            this.drawWorm();

        }



        randomPosition(): void {

            this.x = (Math.random() * (750 - 100)) + 100;
            this.y = (Math.random() * (550 - 200)) + 200;

        }

        drawWorm(): void {



            //Wurm
            crc2.beginPath();
            crc2.strokeStyle = "#610B4B";
            crc2.fillStyle = "#610B4B";
            crc2.arc(this.x + 6, this.y - 15, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 10, this.y - 20, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 6, this.y - 25, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 10, this.y - 30, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 6, this.y - 35, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 10, this.y - 40, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 6, this.y - 45, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 9, this.y - 50, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.arc(this.x + 9, this.y - 55, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            //Erde 
            crc2.beginPath();
            crc2.strokeStyle = "#2A1B0A";
            crc2.fillStyle = "#2A1B0A";
            crc2.arc(this.x - 7, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 7, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 14, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 21, this.y - 10, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            //Augen
            crc2.beginPath();
            crc2.strokeStyle = "#FF0000";
            crc2.fillStyle = "#FF0000";
            crc2.arc(this.x + 4, this.y - 50, 2, 0, Math.PI * 2);
            crc2.arc(this.x + 10, this.y - 50, 2, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();

            //Mund
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.arc(this.x + 7, this.y - 40, 4, 0, Math.PI);
            crc2.stroke();
            crc2.closePath();





        }
        update(): void {


            this.drawWorm();
        }





    }
}