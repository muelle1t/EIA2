/*
Aufgabe: Aufgabe 3b
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 06.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Dieser Code ist in Zusammenarbeit mit Ina Radzuweit und Alisia Steiner entstanden.*/

document.addEventListener("DOMContentLoaded", function(): void {

    let cards: string[] = ["Karo 7",
        "Karo 8",
        "Karo 9",
        "Karo 10",
        "Karo Bube",
        "Karo Dame",
        "Karo König",
        "Karo As",
        "Kreuz 7",
        "Kreuz 8",
        "Kreuz 9",
        "Kreuz 10",
        "Kreuz Bube",
        "Kreuz Dame",
        "Kreuz König",
        "Kreuz As",
        "Herz 7",
        "Herz 8",
        "Herz 9",
        "Herz 10",
        "Herz Bube",
        "Herz Dame",
        "Herz König",
        "Herz As",
        "Pik 7",
        "Pik 8",
        "Pik 9",
        "Pik 10",
        "Pik Bube",
        "Pik Dame",
        "Pik König",
        "Pik As"];

    //Aktivität 1 Vom Nachziehstapel auf den Hanstapel

    let take: HTMLElement = document.getElementById("take");
    take.addEventListener("click", function(): void {

        let cardsOnHand: number = document.getElementById("hand").childElementCount;

        if (cardsOnHand < 5) {

            placeCardToHand();

        }

    });

    //Funktion Karte vom Nachziestapel soll zum Handstapel
    function placeCardToHand(): void {
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("hand").appendChild(div);
        let s: CSSStyleDeclaration = div.style;

        let n: number = Math.round(Math.random() * cards.length);

        while (cards[n] == undefined) {
            Math.round(Math.random() * cards.length);
        }

        div.innerText = cards[n];

        s.border = "solid 2px black";
        s.display = "inline-block";
        s.width = "12em";
        s.height = "18em";
        s.marginLeft = "1em";

        div.className = "cardsDrawn";

        //Listener für jede Karte auf der Hand
        div.addEventListener("click", function(): void {
            let cardsDropped: string[] = [""];

            let cardValue: string = div.innerText;
            let amountOfDroppedCards: number = cardsDropped.push(cardValue); //Karte von der Hand soll zum Ablagestapel

            document.getElementById("drop").innerText = cardValue;

            div.parentNode.removeChild(div);

        });
        cards.splice(n, 1);
    }

});

