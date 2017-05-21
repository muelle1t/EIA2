var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        setRandomPosition() {
            this.x = (Math.random() * (990 - 300)) + 300;
            this.y = (Math.random() * (600 - 450)) + 450;
        }
        drawRandomFlower() {
            let flower = Math.floor((Math.random() * 4) + 0);
            switch (flower) {
                case 0:
                    this.drawDaisyBlue();
                    break;
                case 1:
                    this.drawTulipPurple();
                    break;
                case 2:
                    this.drawDaisyWhite();
                    break;
                case 3:
                    this.drawTulipYellow();
                    break;
            }
        }
        //Magariten
        drawDaisyBlue() {
            //abstract
        }
        drawDaisyWhite() {
            //abstract
        }
        //Tuplen
        drawTulipPurple() {
            //abstract 
        }
        drawTulipYellow() {
            //abstract
        }
    }
    Aufgabe8_Bienen.Flower = Flower;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=flowers.js.map