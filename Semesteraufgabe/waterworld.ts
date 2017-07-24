/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */
namespace Semesteraufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    
       
    export let myGradient: any = crc2.createLinearGradient(0, 0, 0, 150);

    let imgData: ImageData;

    let n: number = 15;
    let allFish: Fish[] = [];
    let allFood: Food[] = [];

    let newFood = document.getElementById("Food");



    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        
        let background: Background = new Background();

        //Schleife für SeeBegrünung
        for (var i: number = 0; i < 20; i++) {
            let sw: Seeweed = new Seeweed(0, 0);
            sw.setRandomPosition();
            sw.drawRandomSeeweed();
        }



        drawWater(0, 0);



        // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);




        for (let i: number = 0; i < n; i++) {

            let rf: Fish = new RegularFish(10, 10);
            rf.drawRegularFish();
            rf.setRandomFirstPosition();
            allFish.push(rf);

            //                let gf: GoldFish = new GoldFish(250, 620);
            //                gf.drawGoldFish();
            //                gf.update();



        }

        console.log("Fische", allFish);

        newFood.addEventListener("click", addFood);
        newFood.addEventListener("touch", addFood);

        window.setTimeout(animate, 120);

 }

    function addFood(_event: Event): void {

        //Schleife für Futter
        for (let i: number = 0; i < n; i++) {

            let freshfood: Food = new Food(10, 10);
            freshfood.drawFood();
            freshfood.move();
            allFood.push(freshfood);


        }
    }





    function drawWater(_x: number, _y: number): void {
        crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        crc2.fillRect(_x, _y, 1000, 700);
        crc2.fill();
        crc2.stroke();
    }



    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes

        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i: number = 0; i < allFish.length; i++) {
            let fish: Fish = (allFish[i]);

            allFish[i].update();


            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (fish.x < 0) {
                fish.x = 1000;
            }
            if (fish.y < 0) {
                fish.y = 700;
            }
            if (fish.y > 700) {
                fish.y = 0;
            }


        }

        window.setTimeout(animate, 40);
    }
}
