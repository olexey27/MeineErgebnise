/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
let artikelListe = ["Brokkoli", "Reis", "Streukäse"]

function artikelAuflisten() {
    console.debug("Aufgabe 1 ==========================");

    // ToDo: füge ab hier deinen Code ein
    console.debug("Artikel auflisten: ")
    for (let i = 0; i < artikelListe.length; i++) {
        console.debug(artikelListe[i])
    }
}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
    console.debug("Aufgabe 2 ==========================");

    let gruppenListe = []
// ToDo: füge ab hier deinen Code ein
    let gemueseListe = ["Brokkoli", "Zwiebel", "Salat"]
    let getreideListe = ["Reis", "Nudeln", "Quinoa"]
    let milchListe = ["Streukäse", "Sahne", "Joghurt"]
    gruppenListe.push(gemueseListe, getreideListe, milchListe)

    for (let i = 0; i < gruppenListe.length; i++) {
        console.debug("Gruppe", i + ":", gruppenListe[i])
    }
}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
    console.debug("Aufgabe 3 ==========================");

    let gruppenListe = []

    // ToDo: füge ab hier deinen Code ein
    let gemueseListe = ["Brokkoli", "Zwiebel", "Salat"]
    gruppenListe.push(gemueseListe);
    console.debug("Artikel entfernen: ")
    console.debug("gemueseGruppe vorher: ", gemueseListe)

    for (let i = gemueseListe.length; i > 0; i--) {
        gemueseListe.pop()
    }
    console.debug("gemueseGruppe nachher: ", gemueseListe)
}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
    console.debug("Aufgabe 4 ==========================");

    // ToDo: füge ab hier deinen Code ein
    let gruppenListe = []
    let gemueseListe = ["Brokkoli", "Zwiebel", "Salat"]
    let getreideListe = ["Reis", "Nudeln", "Quinoa"]
    let milchListe = ["Streukäse", "Sahne", "Joghurt"]
    gruppenListe.push(gemueseListe, getreideListe, milchListe)

    //vorher
    console.debug("Artikel sortieren: ")
    console.debug("gruppenListe Vorher: ")
    for (let i = 0; i < gruppenListe.length; i++) {
        console.debug(gruppenListe[i])
    }

    //sotieren
    for (let i of gruppenListe) {
        i.sort();
    }

    //nachher
    console.debug("gruppenListe Nachher: ", gruppenListe)
}

function main() {
    artikelAuflisten()
    allesAuflisten()
    artikelEntfernen()
    sortieren()
}

main()
export {
    artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}