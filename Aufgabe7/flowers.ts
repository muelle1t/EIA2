namespace Aufgabe7_Bienen {

    export class Flower {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        drawNectarFlowers(): void {
            this.drawDaisy1();
            this.drawDaisy2();
            this.drawTulip1();
            this.drawTulip2();
            }

        setRandomPosition(): void {
            this.x = (Math.random() * (990 - 500)) + 500;
            this.y = (Math.random() * (700 - 450)) + 450;

        }
        drawRandomFlower(): void {
            let flower: number = Math.floor((Math.random() * 4) + 0);
            this.setRandomPosition();
            switch (flower) {
                case 0:
                    this.drawDaisy1();
                    break;
                case 1:
                    this.drawTulip1();
                    break;
                case 2:
                    this.drawDaisy2();
                    break;
                case 3:
                    this.drawTulip2();
                    break;
            }


        }

        //Magariten
        drawDaisy1(): void {
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
            crc2.fillStyle = "#00BFFF";
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

        drawDaisy2(): void {
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


        //Tuplen
        drawTulip1(): void {
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

        drawTulip2(): void {
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
            crc2.fillStyle = "#FFFF00";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 7, 0, Math.PI * 2);
            crc2.fill();
            crc2.closePath();
        }




    }


}