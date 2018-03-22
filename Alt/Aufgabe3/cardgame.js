/*
Aufgabe: Aufgabe 3b
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 06.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code ist in Zusammenarbeit mit Ina Radzuweit und Alisia Steiner entstanden.*/
var Aufgabe3_cardgame;
(function (Aufgabe3_cardgame) {
    let cards = ["Karo 7",
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
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let take = document.getElementById("take");
        take.addEventListener("click", placeCardToHand);
    }
    //Aktivität 1 Vom Nachziehstapel auf den Hanstapel
    //Funktion Karte vom Nachziestapel soll zum Handstapel
    function placeCardToHand() {
        let cardsOnHand = document.getElementById("hand");
        if (cardsOnHand.childElementCount < 5) {
            let div = document.createElement("div");
            document.getElementById("hand").appendChild(div);
            let s = div.style;
            let n = Math.round(Math.random() * cards.length);
            if (cards[n] == undefined) {
                Math.round(Math.random() * cards.length - 1);
            }
            div.innerText = cards[n];
            s.border = "solid 2px black";
            s.display = "inline-block";
            s.width = "12em";
            s.height = "18em";
            s.marginLeft = "1em";
            div.className = "cardsDrawn";
            cards.splice(n, 1);
            div.addEventListener("click", dropCard);
        }
    }
    //Listener für jede Karte auf der Hand
    function dropCard(_event) {
        let target = _event.target;
        let cardValue = target.innerText;
        document.getElementById("drop").innerText = cardValue;
        target.parentNode.removeChild(target);
    }
})(Aufgabe3_cardgame || (Aufgabe3_cardgame = {}));
//# sourceMappingURL=cardgame.js.map