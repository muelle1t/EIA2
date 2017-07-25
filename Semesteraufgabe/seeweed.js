var Aquarium;
(function (Aquarium) {
    class Seeweed {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (350 - 0)) + 0;
            this.y = (Math.random() * (700 - 650)) + 650;
        }
        drawRandomSeeweed() {
            let seeweed = Math.floor((Math.random() * 4) + 0);
            switch (seeweed) {
                case 0:
                    this.drawSeeweed();
                    break;
                case 1:
                    this.drawSeeweed2();
                    break;
            }
        }
        drawSeeweed() {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#088A08";
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.bezierCurveTo(this.x, this.y - 20, this.x - 50, this.y - 220, this.x - 15, this.y - 50);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#088A08";
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.bezierCurveTo(this.x - 10, this.y - 20, this.x - 10, this.y - 200, this.x, this.y - 50);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
        }
        drawSeeweed2() {
            Aquarium.crc2.beginPath();
            Aquarium.crc2.fillStyle = "#4dff88";
            Aquarium.crc2.moveTo(this.x, this.y);
            Aquarium.crc2.fillRect(this.x, this.y - 60, 4, 60);
            //crc2.ellipse(this.x - 2, this.y - 10, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 20, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 30, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 40, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 50, 5, 3, 0, Math.PI * 2, 0);
            Aquarium.crc2.closePath();
            Aquarium.crc2.fill();
        }
    }
    Aquarium.Seeweed = Seeweed;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=seeweed.js.map