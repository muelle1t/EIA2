namespace Abschlussaufgabe {

    export class Bird {

        x: number;
        y: number;
        

        constructor(_x: number, _y: number) {

            console.log("Hello Tweety");
            this.x = _x;
            this.y = _y;
        }


        move(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;



        }



        //Funtion für Tweety
        drawTweety(): void {
            //Schnabel
            tweety.beginPath();
            tweety.strokeStyle = "#FF8000";
            tweety.fillStyle = "#FF8000";
            tweety.moveTo(this.x + 30, this.y - 4);
            tweety.lineTo(this.x + 30, this.y + 5);
            tweety.lineTo(this.x + 45, this.y + 3);
            tweety.lineTo(this.x + 30, this.y - 4);
            tweety.closePath();
            tweety.fill();

            //Körper
            tweety.beginPath();
            tweety.strokeStyle = "#FFFF00";
            tweety.fillStyle = "#FFFF00";
            tweety.arc(this.x, this.y, 16, 0, Math.PI * 2);
            tweety.fill();
            tweety.closePath();



            //Kopf
            tweety.beginPath();
            tweety.strokeStyle = "#FFFF00";
            tweety.fillStyle = "#FFFF00";
            tweety.arc(this.x + 20, this.y - 1, 11, 0, Math.PI * 2);
            tweety.fill();
            tweety.closePath();

            //Auge
            tweety.beginPath();
            tweety.strokeStyle = "#000000";
            tweety.fillStyle = "#000000";
            tweety.arc(this.x + 25, this.y - 6, 1.5, 0, Math.PI * 2);
            tweety.fill();
            tweety.closePath();

            //Flügel
            tweety.beginPath();
            tweety.moveTo(this.x, this.y);
            //tweety.ellipse(this.x - 10, this.y - 10, 10, 25, 60 * Math.PI/90, 0, 2 * Math.PI);
            tweety.fillStyle = "#FFFF00";
            tweety.closePath();
            tweety.fill();
            //tweety.ellipse(this.x - 10, this.y + 10, 10, 25, 60 * Math.PI/180, 0, 2 * Math.PI);
            tweety.fillStyle = "#FFFF00";
            tweety.closePath();
            tweety.fill();




        }
    }

}