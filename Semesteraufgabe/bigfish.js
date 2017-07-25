var Aquarium;
(function (Aquarium) {
    class BigFish {
        constructor(_x, _y) {
            this.eatenFish = 0;
            this.x = _x;
            this.y = _y;
            this.speed = 2;
            //this.setStartPosition();
            //this.setRandomTargetPosition();
        }
        update() {
            this.drawBigFish(); // zeichnet Bösen Fish
            this.move(); //bewegt sich
            //this.setStartPosition();
            this.setRandomTargetPosition();
            //this.eatRegularFish(); 
        }
        setStartPosition() {
            this.x = 300;
            this.y = 200;
        }
        // Ein zufälliges Ziel wird aus dem Array bestimmt
        setRandomTargetPosition() {
            let n = Math.floor(Math.random() * (Aquarium.allFish.length - 1));
            //allFish.shift();
            this.targetRegularFish = Aquarium.allFish[n];
            this.xTarget = Aquarium.allFish[n].x;
            this.yTarget = Aquarium.allFish[n].y;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        drawBigFish() {
            //Flosse hinten
            Aquarium.crc2.beginPath();
            Aquarium.crc2.strokeStyle = "#FF8000";
            Aquarium.crc2.fillStyle = "#FF8000";
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.lineTo(this.x - 30, this.y - 30);
            Aquarium.crc2.lineTo(this.x - 30, this.y + 30);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
            //Körper
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#FF8000";
            Aquarium.crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.stroke();
            //Auge
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#000000";
            Aquarium.crc2.arc(this.x + 20, this.y - 7, 2, 0, 2 * Math.PI);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            //Augenbraue
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#000000";
            Aquarium.crc2.strokeStyle = "#000000";
            Aquarium.crc2.moveTo(this.x + 13, this.y - 15);
            Aquarium.crc2.lineTo(this.x + 25, this.y - 12);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
            //Mund
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            Aquarium.crc2.strokeStyle = "#000000";
            Aquarium.crc2.moveTo(this.x + 30, this.y + 12);
            Aquarium.crc2.lineTo(this.x + 15, this.y + 5);
            Aquarium.crc2.lineTo(this.x + 20, this.y + 24);
            Aquarium.crc2.arcTo(this.x + 20, this.y + 24, this.x + 30, this.y + 12, 25);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
        }
    }
    Aquarium.BigFish = BigFish;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=bigfish.js.map