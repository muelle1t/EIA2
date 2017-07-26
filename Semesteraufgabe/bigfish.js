var Aquarium;
(function (Aquarium) {
    class BigFish extends Aquarium.RegularFish {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            this.drawFish();
            this.move();
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        drawFish() {
            //Flosse hinten
            Aquarium.crc2.beginPath();
            Aquarium.crc2.strokeStyle = this.color;
            Aquarium.crc2.fillStyle = this.color;
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.lineTo(this.x - 30, this.y - 30);
            Aquarium.crc2.lineTo(this.x - 30, this.y + 30);
            Aquarium.crc2.closePath();
            Aquarium.crc2.stroke();
            Aquarium.crc2.fill();
            //Körper
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = this.color;
            Aquarium.crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
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