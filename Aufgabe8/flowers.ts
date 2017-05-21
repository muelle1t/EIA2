namespace Aufgabe8_Bienen {

    export class Flower {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        setRandomPosition(): void {
            this.x = (Math.random() * (990 - 300)) + 300;
            this.y = (Math.random() * (600 - 450)) + 450;

        }
        
        
        drawRandomFlower(): void {
            let flower: number = Math.floor((Math.random() * 4) + 0);
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
        drawDaisyBlue(): void {
            //abstract
        }

        drawDaisyWhite(): void {
           //abstract
        }


        //Tuplen
        drawTulipPurple(): void {
           //abstract 
        }

        drawTulipYellow(): void {
           //abstract
        }




    }


}