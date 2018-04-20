namespace Aufgabe2 {

    window.addEventListener("load", init);

    let contentCards: string[] = ["Apfel", "Apfel", "Birne", "Birne",  "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya",  "Papaya", "Pfirsich", "Pfirsich"];
    console.log(contentCards);

    let cardsList: string[] = [];

    let askPlayer: string;
    let numPlayer: number;

    let askCards: string;
    let numCards: number;

    let amountCards: number;
    let removeCard: number;


    function init(_event: Event): void {


        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        numPlayer = parseInt(askPlayer);

        console.log(numPlayer);

        askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 10):");
        numCards = parseInt(askCards);

        console.log(numCards);

        totalNumCards();

        createInfo(numPlayer);

    }



    //Funktion für die Infotafel
    function createInfo(_numPlayers: number): void {
        let info = document.getElementById("info");
        for (let i: number = 1; i < _numPlayers + 1; i++) {
            let p: HTMLParagraphElement = document.createElement("p");
            p.innerText = "Spieler" + " " + i + ":" + " " + " 0 Punkte";

            info.appendChild(p);
            console.log(info.textContent);
        }
    }

//Funktion für Karten
    function createCards(): void {

        let card: any = document.getElementById("brett");

        let n: number = Math.floor(Math.random() * contentCards.length); //zufälliger Inhalt aus dem Array
        let randomNumber: number = Math.random();

        console.log(contentCards[n]);

        if (randomNumber <= 0.5) { //closed
            let div: HTMLDivElement = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "closed");
            cardsList.push(card);
        }

        if (randomNumber > 0.5 && randomNumber <= 0.75) { //open
            let div: HTMLDivElement = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "open");
            div.innerText = contentCards[n];
            cardsList.push(card);

        }
        else if (randomNumber > 0.75) { //taken
            let div: HTMLDivElement = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "taken");
            cardsList.push(card);

        }

        contentCards.splice(n, 1);

    }
//Funktion für die Anzahl der KArten
    function totalNumCards(): void {

        amountCards = numCards * 2;
        console.log(amountCards);

        
        for (let i: number = 0; i < amountCards; i++) {

            createCards();

        }

    }




}


