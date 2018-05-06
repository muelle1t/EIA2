var Aufgabe4;
(function (Aufgabe4) {
    ;
    // Definieren der einzelnen Kartendecks
    Aufgabe4.decks = {};
    Aufgabe4.deck = {
        cardContent: ["Puddel", "Terrier", "Labrador", "Mops", "Dalmatiner", "Schäferhund", "Border Collie", "Shi Tzu", "Husky", "Dackel"],
        cardColor: "green",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Aufgabe4.decks["dogs"] = Aufgabe4.deck;
    Aufgabe4.deck = {
        cardContent: ["Aschenputtel", "Dornröschen", "Schneewittchen", "Ariel", "Mulan", "Belle", "Pocahontas", "Rapunzel", "Jasmin", "Tiana"],
        cardColor: "pink",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Aufgabe4.decks["disney"] = Aufgabe4.deck;
    Aufgabe4.deck = {
        cardContent: ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Aufgabe4.decks["fruits"] = Aufgabe4.deck;
    Aufgabe4.scoreboard = [];
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Memory_Interfaces.js.map