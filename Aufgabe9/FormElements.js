/*
Aufgabe: Aufgabe 9
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.06.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

Der Code entstand wurde in Zusammenarbeit mir Alisia Steiner und Ina Radzuweit*/
//Eissorten ohne checkboxen -> die Auswahl der Anzahl mit ID der Sorte (z.B.: Vanille) versehen
var Form;
(function (Form) {
    let sorten = ["Vanille",
        "Schoko",
        "Erdbeer",
        "Zitrone",
        "Nuss",
        "Sahnekirsch"];
    let varianten = ["Waffel",
        "Becher"];
    let extras = ["Sahne",
        "Buntestreusel",
        "Schokostreusel",
        "Krokantstreusel",
        "Schokosoße",
        "Erdbeersoße"];
    let lieferOptionen = ["Express",
        "Premium",
        "Standard"];
    let kontakt = ["Name",
        "Nachname",
        "Straße + Hausnr.",
        "PLZ + Ort",
        "Telefonnummer",
        "E-mail"];
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();
    }
    function createFieldSetBestellung() {
        let fieldSetBestellung = document.getElementById("Bestellung");
        let fieldSetVarianten = document.getElementById("Varianten");
        let fieldSetSorten = document.getElementById("Sorten");
        let fieldSetExtras = document.getElementById("Extras");
        /* Schleife für Sorten */
        for (let i = 0; i < sorten.length; i++) {
            let wrapperDiv = document.createElement("div");
            let eissortenP = document.createElement("p");
            eissortenP.textContent = sorten[i];
            let eissortenInput = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorten[i];
            eissortenInput.className = "styleName";
            eissortenInput.max = "5";
            eissortenInput.min = "0";
            eissortenInput.value = "0";
            wrapperDiv.appendChild(eissortenP);
            wrapperDiv.appendChild(eissortenInput);
            fieldSetSorten.appendChild(wrapperDiv);
            console.log(sorten);
        }
        /*Schleife für Varianten*/
        for (let i = 0; i < varianten.length; i++) {
            let wrapperDiv = document.createElement("div");
            let variantenP = document.createElement("p");
            variantenP.textContent = varianten[i];
            let variantenInput = document.createElement("input");
            variantenInput.type = "radio";
            variantenInput.id = varianten[i];
            variantenInput.value = "0";
            wrapperDiv.appendChild(variantenP);
            wrapperDiv.appendChild(variantenInput);
            fieldSetVarianten.appendChild(wrapperDiv);
            console.log(varianten);
        }
        /* Schleife für Extras */
        for (let i = 0; i < extras.length; i++) {
            let wrapperDiv = document.createElement("div");
            let extrasP = document.createElement("p");
            extrasP.textContent = extras[i];
            let extrasInput = document.createElement("input");
            extrasInput.type = "radio";
            extrasInput.id = extras[i];
            extrasInput.className = "styleName";
            extrasInput.value = "0";
            wrapperDiv.appendChild(extrasP);
            wrapperDiv.appendChild(extrasInput);
            fieldSetExtras.appendChild(wrapperDiv);
            console.log(extras);
        }
    }
    function createFieldSetÜbersicht() {
        let fieldSetÜbersicht = document.getElementById("Übersicht");
        let fieldSetBestellübersicht = document.getElementById("Bestellübersicht");
        let fieldSetKontakt = document.getElementById("Kontakt");
        let fieldSetLieferOptionen = document.getElementById("Lieferoptionen");
        /* Schleife für Bestellübersicht
        for (let i: number = 0; i < sorten.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = sorten[i];

            let eissortenInput: HTMLInputElement = document.createElement("input");
            eissortenInput.type = "text";
            eissortenInput.id = sorten[i];
            eissortenInput.className = "styleName";
            eissortenInput.max = "5";
            eissortenInput.min = "0";
            eissortenInput.value = "0";

            wrapperDiv.appendChild(eissortenP);
            wrapperDiv.appendChild(eissortenInput);

            fieldSetBestellübersicht.appendChild(wrapperDiv);
            console.log(sorten);

        }*/
        /*Schleife für Kontaktdaten*/
        for (let i = 0; i < kontakt.length; i++) {
            let wrapperDiv = document.createElement("div");
            let variantenP = document.createElement("p");
            variantenP.textContent = kontakt[i];
            let variantenInput = document.createElement("input");
            variantenInput.type = "text";
            variantenInput.id = kontakt[i];
            variantenInput.placeholder = "hier eintippen";
            wrapperDiv.appendChild(variantenP);
            wrapperDiv.appendChild(variantenInput);
            fieldSetKontakt.appendChild(wrapperDiv);
            console.log(varianten);
        }
        /* Schleife für Lieferoptionen */
        for (let i = 0; i < lieferOptionen.length; i++) {
            let wrapperDiv = document.createElement("div");
            let lieferOptionenP = document.createElement("p");
            lieferOptionenP.textContent = lieferOptionen[i];
            let lieferOptionenInput = document.createElement("input");
            lieferOptionenInput.type = "radio";
            lieferOptionenInput.id = extras[i];
            lieferOptionenInput.className = "styleName";
            lieferOptionenInput.value = "0";
            wrapperDiv.appendChild(lieferOptionenP);
            wrapperDiv.appendChild(lieferOptionenInput);
            fieldSetLieferOptionen.appendChild(wrapperDiv);
            console.log(extras);
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map