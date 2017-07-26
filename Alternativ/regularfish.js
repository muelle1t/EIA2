var AltAquarium;
(function (AltAquarium) {
    class RegularFish {
        constructor(_x, _y, _color) {
            this.radius = 10;
            this.winkel = 0;
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 52;
            this.setRandomStyle();
            this.color = _color;
            this.setRandomDirection();
        }
        update() {
            this.drawRegularFish();
            this.move();
        }
        drawRegularFish() {
            //Flosse hinten
            AltAquarium.crc2.beginPath();
            AltAquarium.crc2.strokeStyle = this.color;
            AltAquarium.crc2.fillStyle = this.color;
            AltAquarium.crc2.moveTo(this.x, this.y);
            AltAquarium.crc2.lineTo(this.x - 20, this.y - 15);
            AltAquarium.crc2.lineTo(this.x - 20, this.y + 15);
            AltAquarium.crc2.closePath();
            AltAquarium.crc2.stroke();
            AltAquarium.crc2.fill();
            //Körper
            AltAquarium.crc2.beginPath();
            AltAquarium.crc2.fillStyle = this.color;
            //crc2.arc(_x + 7, _y, 20, 0, 2 * Math.PI);
            //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
            AltAquarium.crc2.closePath();
            AltAquarium.crc2.fill();
            AltAquarium.crc2.stroke();
            //Auge
            AltAquarium.crc2.beginPath();
            AltAquarium.crc2.fillStyle = "#000000";
            AltAquarium.crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
            AltAquarium.crc2.closePath();
            AltAquarium.crc2.fill();
            //Mund
            AltAquarium.crc2.beginPath();
            AltAquarium.crc2.fillStyle = "#000000";
            AltAquarium.crc2.strokeStyle = "#000000";
            AltAquarium.crc2.moveTo(this.x + 15, this.y + 5);
            AltAquarium.crc2.lineTo(this.x + 25, this.y + 6);
            AltAquarium.crc2.closePath();
            AltAquarium.crc2.stroke();
            AltAquarium.crc2.fill();
        }
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
        }
        setRandomDirection() {
            this.direction = Math.round((Math.random() * 50) + 1000);
        }
    }
    AltAquarium.RegularFish = RegularFish;
})(AltAquarium || (AltAquarium = {}));
//# sourceMappingURL=regularfish.js.map