/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 30.06.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe11 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let n: number = 8;
    let m: number = 6;

    let imagedata: ImageData;

    let objects: MovingObjects[] = [];

    


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergund aus Background Klasse
        let bg: Background = new Background;
        bg.draw();

        // Hintergrundbild
        imagedata = crc2.getImageData(0, 0, 640, 360);
        console.log(imagedata);

        canvas.addEventListener("click", insertFood);
        canvas.addEventListener("touchstart", insertFood);



        for (let i: number = 0; i < m; i++) {
            let bb: BigBubble = new BigBubble((Math.random() * (550 - 450)) + 450, (Math.random() * (600 - 100)) + 100);

            objects.push(bb);
        }

        for (let i: number = 0; i < m; i++) {
            let sb: SmallBubble = new SmallBubble((Math.random() * (550 - 450)) + 450, (Math.random() * (600 - 100)) + 100);

            objects.push(sb);
        }

        for (let i: number = 0; i < n; i++) {
            let bf: BigFish = new BigFish((Math.random() * (900 - 50)) + 50, (Math.random() * (600 - 50)) + 50);

            objects.push(bf);
        }

        for (let i: number = 0; i < n; i++) {
            let sf: SmallFish = new SmallFish((Math.random() * (1000 - 70)) + 70, (Math.random() * (400 - 60)) + 60);

            objects.push(sf);
        }


        imagedata = crc2.getImageData(0, 0, 1000, 700);

        animate();
    }

    function insertFood(_event: MouseEvent): void {
        let fx: number = _event.pageX;
        let fy: number = _event.pageY;

        let flake: Food = new Food(fx, fy);
        
        objects.push(flake);
    }

    function animate(): void {



        crc2.putImageData(imagedata, 0, 0);

        moveObjects();
        drawObjects();

        window.setTimeout(animate, 20);
    }
    
    function drawObjects(): void {
        for (let i: number = 0; i < objects.length; i++)
            objects[i].draw();

    }

    function moveObjects(): void {
        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }

    }


} //End namespace