namespace Aquarium {

    export class BigFish {

        x: number;
        y: number;
        xTarget: number;
        yTarget: number;
        speed: number;
        targetRegularFish: RegularFish;
        xDirection: number;
        yDirection: number;
        active: boolean;
        eatenFish: number = 0;




        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
            this.speed = 5;
            this.setRandomTargetPosition();
            this.active = true;

        }

        update(): void {
            if (this.active == true) {
                this.setRandomTargetPosition();
                this.move(); //bewegt sich
                //this.eatRegularFish(); 
            }
            this.drawBigFish(); // zeichnet Bösen Fish
        }

        stop(): void {
            this.active = false;

        }


        // Ein zufälliges Ziel wird aus dem Array bestimmt
        setRandomTargetPosition(): void {

            if (allFish.length == 0) {
                this.stop();
            }
            else {

                let n: number = Math.floor(Math.random() * (allFish.length - 1));
                
                //allFish.shift();
                this.targetRegularFish = allFish[n];
                
                this.xTarget = allFish[n].x;
                this.yTarget = allFish[n].y;

                
            }

        }

        drawBigFish(): void {
            //Flosse hinten
            crc2.beginPath();
            crc2.strokeStyle = "#FF8000";
            crc2.fillStyle = "#FF8000";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 30, this.y - 30);
            crc2.lineTo(this.x - 30, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            //Körper
            crc2.beginPath();
            crc2.fillStyle = "#FF8000";
            crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Auge
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 20, this.y - 7, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Augenbraue
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 13, this.y - 15);
            crc2.lineTo(this.x + 25, this.y - 12);
            crc2.closePath();
            crc2.stroke();
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

eatRegularFish(): void {

            //ankommen am Ziel durch Berechnung der Differenz der aktuellen Position und der Position der kleinen Fische
            let maxDistance: number = 10;
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) <= maxDistance && Math.abs(yDiff) <= maxDistance) {
                // fressen               
                allFish.splice(allFish.indexOf(this.targetRegularFish), 1);
                // neues Ziel
                this.setRandomTargetPosition();

                this.eatenFish += 1;
            }
            // nach 5 gefressenen Fischen ist Spiel vorbei
            if (this.eatenFish == 5) {

                this.stop();
                alert("Game over! Please Start a New Game!");
            }
        }
        
        // dem bösen Fisch wird mittgeteilt, ob sein Ziel schon vor dem fressen vernichtet wurde, falls ja, neues Ziel
        // Aufruf bei jedem klick
        fishLost(_i: RegularFish): void {
            if (_i == this.targetRegularFish) {
                this.setRandomTargetPosition();
            }
        }

       move(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
        }




    }
}

}