/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */
namespace Aquarium {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let imgData: ImageData;

    let n: number = (Math.floor((Math.random() * 2) + 1)); //random Anzahl generierter Fische

    let allFish: Fish[] = [];

    export let myGradient: any = crc2.createLinearGradient(0, 0, 0, 150);

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        let background: Background = new Background();


        drawWater(0, 0);

      // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        for (let i: number = 0; i < n; i++) {

            let x: number = Math.random() * 900;
            let y: number = Math.random() * 450;
            let _color: string;

            let bf: BigFish = new BigFish(x, y);
            bf.drawBigFish();
            allFish.push(bf);

            let rf: RegularFish = new RegularFish(x, y, _color);
            rf.drawRegularFish();

            allFish.push(rf);

        }

        console.log("Fish", allFish);




        window.setTimeout(animate, 120);

        //Shoot-Button
        let eatButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("eat");
        eatButton.addEventListener("click", eatFish);
        eatButton.addEventListener("touch", eatFish);

        //Restart-Button
        let restartButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restart");
        restartButton.addEventListener("click", restartGame);
        restartButton.addEventListener("touch", restartGame);

    }



    //FUNKTIONEN     
    //shootBalloon: Aus Array ersten Ballon herausnehmen, addMoreBalloons aufrufen
    function eatFish(_event: Event): void {


        allFish.shift(); //abgeschossenen Ballon aus balloons entnehmen
        //addMoreBalloons();

    }

    //Restart game: Seite neu laden
    function restartGame(_event: Event): void {
        location.reload(true);

    }

    //animate
    function animate(): void {

        crc2.putImageData(imgData, 0, 0);


        //Updatefunktion aufrufen
        for (let i: number = 0; i < n; i++) {
            let f: Fish = allFish[i];


            f.update();
        }

        window.setTimeout(animate, 120);

    }

    function drawWater(_x: number, _y: number): void {
        crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        crc2.fillRect(_x, _y, 1000, 700);
        crc2.fill();
        crc2.stroke();
    }


}


