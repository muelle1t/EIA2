var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (w) oder 1 (m)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let inputdata = _input.split(",");
        let student = {
            studentnumber: parseInt(inputdata[0]),
            name: inputdata[1],
            surname: inputdata[2],
            age: parseInt(inputdata[3]),
            sex: parseInt(inputdata[4]) == 0,
            comment: inputdata[5]
        };
        if (inputdata.length <= 5) {
            return "Eingabe nicht vollständig. Bitte Ergänzen!";
        }
        if (isNaN(parseInt(inputdata[0]))) {
            return "Bitte als Zahl angeben!";
        }
        if (isNaN(parseInt(inputdata[3]))) {
            return "Bitte Alter als Zahl angeben!";
        }
        students.push(student);
        let sex;
        if (student.sex == true) {
            sex = "weiblich";
        }
        else {
            sex = "männlich";
        }
        return "Eintragung erfolgreich! Folgende Daten wurden erfasst: \nMatrikelnummer: " + student.studentnumber + "\nName: " + student.surname + student.name + "\nAlter: " + student.age + "\nGeschlecht: " + sex + "\nKommentar: " + student.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].studentnumber == _matrikel) {
                let sex;
                if (students[i].sex == true) {
                    sex = "weiblich";
                }
                else {
                    sex = "männlich";
                }
                return "Folgende Daten wurden gefunden: \nMatrikelnummer: " + students[i].studentnumber + "\nName: " + students[i].surname + students[i].name + "\nAlter: " + students[i].age + "\nGeschlecht: " + sex + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Zu dieser Matrikelnummer gibt es keine Eintragung";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map