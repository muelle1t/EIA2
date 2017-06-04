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
            extrasInput.value = "0";

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

        function handleChange(_event: Event): void {
            document.getElementById("Bestellübersicht");

            let sum: number = 0;
            
            let target: HTMLInputElement = <HTMLInputElement>_event.target;

            for (let i: number = 0; i < inputSorten.length; i++) {
                sum += parseFloat(inputSorten[i].value);
                
                displayOrder();
            }

            function displayOrder(): void {
                let table: HTMLTableElement = document.createElement("table");
                table.id = "Bestellübersicht";
                for (let i: number = 0; i < inputSorten.length; i++) {
                    if (parseFloat(inputSorten[i].value) != 0) {
                        table.appendChild(document.createElement("tr"));
                        table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(sorten[i])));
                        table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode(inputSorten[i].value + " x 1€")));
                        table.lastChild.appendChild(document.createElement("td").appendChild(document.createTextNode("= " + inputSorten[i].value + ",00 €")));
                    }
                }

                document.getElementById("output").appendChild(table);
            }


        }
    }
}



