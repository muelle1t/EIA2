/*
Aufgabe: Aufgabe 9
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.06.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 

Der Code entstand wurde in Zusammenarbeit mir Alisia Steiner und Ina Radzuweit*/

//Eissorten ohne checkboxen -> die Auswahl der Anzahl mit ID der Sorte (z.B.: Vanille) versehen

namespace Form {
    let sorten: string[] = ["Vanille",
        "Schoko",
        "Erdbeer",
        "Zitrone",
        "Nuss",
        "Sahnekirsch"];

    let inputSorten: HTMLInputElement[] = [];

    let varianten: string[] = ["Waffel",
        "Becher"];

    let inputVarianten: HTMLInputElement[] = [];



    let extras: string[] = ["Sahne",
        "Buntestreusel",
        "Schokostreusel",
        "Krokantstreusel",
        "Schokosoße",
        "Erdbeersoße"];

    let inputExtras: HTMLInputElement[] = [];

    let lieferOptionen: string[] = ["Express",
        "Premium",
        "Standard"];

    let inputLieferOptionen: HTMLInputElement[] = [];

    let kontakt: string[] = ["Name",
        "Nachname",
        "Straße + Hausnr.",
        "PLZ + Ort",
        "Telefonnummer",
        "E-mail"];
    let inputKontakt: HTMLInputElement[] = [];


    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();
    }

    function createFieldSetBestellung(): void {
        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
        let fieldSetVarianten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Varianten");
        let fieldSetSorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
        let fieldSetExtras: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Extras");



        /* Schleife für Sorten */
        for (let i: number = 0; i < sorten.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = sorten[i];

            let eissortenInput: HTMLInputElement = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorten[i];
            eissortenInput.className = "styleName";
            eissortenInput.max = "5";
            eissortenInput.min = "0";
            eissortenInput.value = "0";

            wrapperDiv.appendChild(eissortenP);
            wrapperDiv.appendChild(eissortenInput);

            fieldSetSorten.appendChild(wrapperDiv);
            inputSorten.push(eissortenInput);
            console.log(inputSorten);

        }

        /*Schleife für Varianten*/
        for (let i: number = 0; i < varianten.length; i++) {

            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let variantenP: HTMLParagraphElement = document.createElement("p");
            variantenP.textContent = varianten[i];

            let variantenInput: HTMLInputElement = document.createElement("input");
            variantenInput.type = "radio";
            variantenInput.id = varianten[i];
            variantenInput.value = "0";


            wrapperDiv.appendChild(variantenP);
            wrapperDiv.appendChild(variantenInput);

            fieldSetVarianten.appendChild(wrapperDiv);
            console.log(varianten);
        }

        /* Schleife für Extras */
        for (let i: number = 0; i < extras.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let extrasP: HTMLParagraphElement = document.createElement("p");
            extrasP.textContent = extras[i];


            let extrasInput: HTMLInputElement = document.createElement("input");
            extrasInput.type = "radio";
            extrasInput.id = extras[i];
            extrasInput.className = "styleName";


            wrapperDiv.appendChild(extrasP);
            wrapperDiv.appendChild(extrasInput);

            fieldSetExtras.appendChild(wrapperDiv);
            console.log(extras);

        }
    }
    function createFieldSetÜbersicht(): void {
        let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Übersicht");
        let fieldSetBestellübersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellübersicht");
        let fieldSetKontakt: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontakt");
        let fieldSetLieferOptionen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Lieferoptionen");



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
        for (let i: number = 0; i < kontakt.length; i++) {

            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let kontaktDatenP: HTMLParagraphElement = document.createElement("p");
            kontaktDatenP.textContent = kontakt[i];

            let kontaktDatenInput: HTMLInputElement = document.createElement("input");
            kontaktDatenInput.type = "text";
            kontaktDatenInput.id = kontakt[i];
            kontaktDatenInput.placeholder = "hier eintippen";




            wrapperDiv.appendChild(kontaktDatenP);
            wrapperDiv.appendChild(kontaktDatenInput);

            fieldSetKontakt.appendChild(wrapperDiv);
            console.log(varianten);
        }

        /* Schleife für Lieferoptionen */
        for (let i: number = 0; i < lieferOptionen.length; i++) {
            let wrapperDiv: HTMLDivElement = document.createElement("div");

            let lieferOptionenP: HTMLParagraphElement = document.createElement("p");
            lieferOptionenP.textContent = lieferOptionen[i];


            let lieferOptionenInput: HTMLInputElement = document.createElement("input");
            lieferOptionenInput.type = "radio";
            lieferOptionenInput.id = extras[i];
            lieferOptionenInput.className = "styleName";
            lieferOptionenInput.value = "0";

            wrapperDiv.appendChild(lieferOptionenP);
            wrapperDiv.appendChild(lieferOptionenInput);

            fieldSetLieferOptionen.appendChild(wrapperDiv);
            console.log(extras);

        }

        //Funktion handleChange
        function handleChange(): void {
            let summe: number = 0;
            let countSorten: number = 0;
            //Kugelanzahl/ Sorte
            //1 € pro Kugel: entsprechenden Wert der ausgewählten Menge addieren
            for (let i: number = 0; i < inputSorten.length; i++) {
                summe += parseInt(inputSorten[i].value);
            }
            //Toppinganzahl
            for (let i: number = 0; i < inputExtras.length; i++) {
                //prüfen, ob Topping ausgewählt ist --> 0,50 € addieren
                if (inputExtras[i].checked) {
                    summe += 0.5; }
            }
            displayTotalSum();



        } //Ende Funktion handleChange


        //Funktion: Darstellung Summe und BEstellung --> funktioniert nicht 
        function displayTotalSum(): void {

            let bestellsumme: HTMLElement = document.getElementById("Summe");

            bestellsumme.innerText = " ";

            //Sorten Preisermittlung
            for (let i: number = 0; i < inputSorten.length; i++) {
                if (parseInt(inputSorten[i].value) > 0) {
                    bestellsumme.innerText += sorten[i] + "" + inputSorten[i] + "€";
                }
            }

            //Topping gewählt: addiere 0,50 € zur Summe
            for (let i: number = 0; i < inputExtras.length; i++) {
                if (inputExtras[i].checked) {
                    bestellsumme.innerText += extras[i] + "0,50" + "€";
                }
            }

            //Variante gewählt: zeige Auswahl
            for (let i: number = 0; i < inputVarianten.length; i++) {
                if (inputVarianten[i].checked) {
                    bestellsumme.innerText += varianten[i];
                }
            }
        }

}

    }



