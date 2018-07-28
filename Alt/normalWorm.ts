namespace Abschlussaufgabe {

    export class NormalWorm extends Worm {

        x: number;
        y: number;
        


        constructor() {

            super();
            
            console.log("normalWorm");

            
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
            crc2.strokeStyle = "#F5A9E1";
            crc2.fillStyle = "#F5A9E1";
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
            crc2.strokeStyle = "#61210B";
            crc2.fillStyle = "#61210B";
            crc2.arc(this.x - 7, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 7, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 14, this.y - 10, 7, 0, Math.PI * 2);
            crc2.arc(this.x + 21, this.y - 10, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            
             //Augen
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 5, this.y - 45, 2, 0, Math.PI * 2);
            crc2.arc(this.x + 11, this.y - 45, 2, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
            
            //Mund
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.arc(this.x + 7, this.y - 40, 4, 0, Math.PI);
            crc2.stroke();
        
        }
        update(): void {

            
            this.drawWorm();
        }

        

      




    }

}