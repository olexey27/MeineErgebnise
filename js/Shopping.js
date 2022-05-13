import {aktiveGruppe, gruppeFinden, gruppenListe} from "../lektion6/loesung/loesung6.js";

class App {
    gruppenListe = []
    aktiveGruppe = null
    setup


    gruppeFinden(gruppenName) {
        let gefundeneGruppe = gruppenListe.indexOf(gruppenName)
        if (gefundeneGruppe > -1) {
            return gruppenListe[gefundeneGruppe]
        } else {
            console.warn("Gruppe \"" + gruppenName + "\" nicht gefunden")
            return null
        }
    }
    gruppeHinzufuegen(name) {
        const gleicheGruppen = gruppenListe.indexOf(name)
        // keine Gruppe mit diesem Namen vorhanden
        if (gleicheGruppen == -1) {
            let neueGruppe = name
            this.gruppenListe.push(neueGruppe)
            this.aktiveGruppe = neueGruppe
            console.debug("[App] Gruppe \"" + neueGruppe + "\" hinzugefügt")
            return neueGruppe
        } else {
            console.warn("Gruppe \"" + name + "\" existiert schon!")
        }
    }
    gruppeUmbenennen(alterName, neuerName) {
        let vorhandeneGruppe = gruppeFinden(alterName)
        if (vorhandeneGruppe != null) {
            let index = gruppenListe.indexOf(alterName)
            this.gruppenListe[index] = neuerName
            console.debug("Gruppe von \"" + alterName + "\" nach \"" + neuerName + "\" umbenannt")
        }
    }
    gruppeEntfernen(gruppenName) {
        let entfernGruppe = gruppeFinden(gruppenName)
        if (entfernGruppe != null) {
            let index = gruppenListe.indexOf(entfernGruppe)
            this.gruppenListe.splice(index, 1)
            console.debug("[App] Gruppe \"" + gruppenName + "\" entfernt")
        } else {
            console.warn("Gruppe \"" + gruppenName + "\" konnte NICHT entfernt werden")
        }
    }
}
export {App}