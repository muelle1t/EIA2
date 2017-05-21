var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class HoneyBee extends Aufgabe8_Bienen.Bees {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            this.speed = 0.3;
            this.setStartPosition();
            this.setRandomTargetPosition();
        }
        setRandomTargetPosition() {
            let randomTargetFlower = Math.round(Math.random() * (Aufgabe8_Bienen.nectarFlowers.length - 1));
            this.xTarget = Aufgabe8_Bienen.nectarFlowers[randomTargetFlower].x;
            this.yTarget = Aufgabe8_Bienen.nectarFlowers[randomTargetFlower].y;
        }
        setStartPosition() {
            this.x = 250;
            this.y = 620;
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
        drawBee() {
            //abstract 
        }
    }
    Aufgabe8_Bienen.HoneyBee = HoneyBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=honeybee.js.map