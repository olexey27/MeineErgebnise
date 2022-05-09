/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu

function gruppeFinden(gruppenName) {

let gruppenIndex = gruppenListe.indexOf(gruppenName)

    for(let i = 0; i< gruppenListe.length; i++){

        if(gruppenIndex > -1){
            return gruppenListe[gruppenIndex]
        }
        else {
        console.debug("Gruppe " + "''" +  gruppenName + "''" + " nicht gefunden")
            return null
        }
    }
}
function gruppeHinzufuegen(name){
    let gleicheGruppe = gruppenListe.indexOf(name)
    if (gleicheGruppe == -1) {
        let neueGruppe = name
        gruppenListe.push(neueGruppe)
        aktiveGruppe = neueGruppe
        console.debug("[App] Gruppe " + neueGruppe + " hinzugefügt")
        return neueGruppe
    }
    else {
        console.warn("Gruppe" + name + " existiert schon")
        return null
    }
}
function gruppeUmbenennen(alterName, neuerName) {
    let vorhandeneGruppe = gruppeFinden(alterName)
    if (vorhandeneGruppe != null) {
        let index = gruppenListe.indexOf(alterName)
        gruppenListe[index] = neuerName
        console.debug("Gruppe " + alterName + " wurde in " + neuerName + " umbenannt")
    }
    else {
        console.warn("Gruppe " + alterName + " nicht gefunden")
    }
}
function gruppeEntfernen(gruppenName) {
    let entferneGruppe = gruppeFinden(gruppenName)
    if (entferneGruppe != null) {
        let index = gruppenListe.indexOf(gruppenName)
        gruppenListe.splice(index, 1)
        console.debug("Gruppe " + gruppenName + " wurde entfernt")
    }
    else {
        console.warn("Gruppe " + gruppenName + " konnte NICHT entfernt werden")
    }
}

function main() {
    gruppeFinden()
    gruppeHinzufuegen()
    gruppeUmbenennen()
    gruppeEntfernen
}
main()
export {
  gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}