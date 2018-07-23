/*
Aufgabe: Abschlussaufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 23.07.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Abschlussaufgabe {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;

    let clouds: Cloud[] = [];




    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergund aus Background Klasse
        let bg: Background = new Background;
        bg.draw();

        imgData = crc2.getImageData(0, 0, 640, 360);

        for (let i: number = 0; i < 3; i++) {
            let c: Cloud = new Cloud();
            c.x = (Math.random() * (1000 - 0)) + 0;
            c.y = (Math.random() * (100 - 10)) + 10;

            clouds.push(c);
        }


        imgData = crc2.getImageData(0, 0, 1000, 700);

        animate();

        //        new Cloud(350, 70);
        //        new Cloud(600, 95);
        //        new Cloud(890, 70);



    }

    function animate(): void {


        crc2.putImageData(imgData, 0, 0);

        drawCloud();
        moveCloud();



        window.setTimeout(animate, 20);
    }

    function drawCloud(): void {
        for (let i: number = 0; i < clouds.length; i++)
            clouds[i].drawCloud();
    }

    function moveCloud(): void {
        for (let i: number = 0; i < clouds.length; i++) {
            clouds[i].moveCloud();
        }
    }






}

