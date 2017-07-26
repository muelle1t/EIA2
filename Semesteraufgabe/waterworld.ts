/*
Aufgabe: Semesteraufgabe
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 19.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Leider ist die Abgabe funktionslos. Ich habe alles veruchst. Die Konsole zeigt mir an das RegularFish und BigFish kein Constructor ist und 
obwohl ich auch danach gegoogelt habe leuchtet es mir einfach nicht ein. Aber ich wollte wenigstens etwas abgeben.*/

namespace Aquarium {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let imgData: ImageData;

    let n: number = (Math.floor((Math.random() * 2) + 1)); //random Anzahl generierter Fische

    export let allFish: RegularFish[] = [];

    export let myGradient: any = crc2.createLinearGradient(0, 0, 0, 150);

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        let background: Background = new Background(); // der Hintergrund wird generiert


        drawWater(0, 0);

      // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Fische werden gezeichnet und ins Array gepusht
        for (let i: number = 0; i < 15; i++) {

            let x: number = Math.random() * 900;//die Fische tauchen an unterschiedlichen start Positionen auf
            let y: number = Math.random() * 450;
            let _color: string;

            let bf: BigFish = new BigFish(x, y, "#FF8000");
            bf.drawFish();
            allFish.push(bf);
            
            console.log("Fish", BigFish);

            let rf: RegularFish = new RegularFish(x, y, _color);
            rf.drawFish();

            allFish.push(rf);

        }

        console.log("Fish", allFish);




        window.setTimeout(animate, 120);

        //Eat-Button
        let eatButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("eat");
        eatButton.addEventListener("click", eatFish);
        eatButton.addEventListener("touch", eatFish);

        //Restart-Button
        let restartButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("new");
        restartButton.addEventListener("click", newGame);
        restartButton.addEventListener("touch", newGame);

    }



    //FUNKTIONEN     
    //Funktion für Button
    function eatFish(_event: Event): void {


        allFish.shift(); //gefressenen Fish aus dem Array entfernen
        

    }

    //Funktion Seite neu laden
    function newGame(_event: Event): void {
        location.reload(true);

    }

    //animate
    function animate(): void {

        crc2.putImageData(imgData, 0, 0);


        //Updatefunktion aufrufen
        for (let i: number = 0; i < n; i++) {
            let f: RegularFish = allFish[i];


            f.update();
        }

        window.setTimeout(animate, 120);

    }
    // Das dient dazu damit es den Eindruck macht alles wäre unter wasser
    function drawWater(_x: number, _y: number): void {
        crc2.fillStyle = "rgb(179, 179, 255, 0.5)";
        crc2.fillRect(_x, _y, 1000, 700);
        crc2.fill();
        crc2.stroke();
    }


}


