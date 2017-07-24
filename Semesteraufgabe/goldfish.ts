namespace Semesteraufgabe {
    export class GoldFish extends Fish {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.speed = 0.03;
            this.setStartPosition();
            this.setRandomTargetPosition();

        }




        setRandomTargetPosition(): void {
            let randomTargetFlower: number = Math.round(Math.random() * (nectarFlowers.length - 1));
            this.xTarget = nectarFlowers[randomTargetFlower].x;
            this.yTarget = nectarFlowers[randomTargetFlower].y;
        }

        setStartPosition(): void {
            this.x += Math.random() * 10;
            this.y += Math.random() * 5;
        }


        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y - 35;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }

        drawGoldFish(): void {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = "#FF8000";
        crc2.fillStyle = "#FF8000";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 20, this.y - 15);
        crc2.lineTo(this.x - 20, this.y + 15);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Flosse oben
//        crc2.beginPath();
//        crc2.strokeStyle = "#FFBF00";
//        crc2.fillStyle = "#FFBF00";
//        crc2.moveTo(_x, _y);
//        crc2.lineTo(_x - 5, _y - 25);
//        crc2.lineTo(_x + 10, _y - 25);
//        crc2.closePath();
//        crc2.stroke();
//        crc2.fill();

        //Flossen unten

//        crc2.beginPath();
//        crc2.strokeStyle = "#FFBF00";
//        crc2.fillStyle = "#FFBF00";
//        crc2.moveTo(_x, _y);
//        crc2.lineTo(_x, _y + 24);
//        crc2.lineTo(_x + 15, _y + 24);
//        crc2.closePath();
//        crc2.stroke();
//        crc2.fill();

        //Körper
        crc2.beginPath();
        crc2.fillStyle = "#FF8000";
        crc2.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
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