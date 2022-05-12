import Artikel from "./Artikel.js"
import artikel from "./Artikel.js";

/**
 * Klasse zum Gruppieren der Artikel
 *
 * @property {Number}    counter      - dient zur Erzeugung eindeutiger Gruppen-IDs
 * @property {Number}    id           - eindeutige ID-Nummer der Gruppe
 * @property {Number}    index        - Position der Gruppe innerhalb der Gruppenliste
 * @property {String}    name         - Name der Gruppe
 * @property {Artikel[]} artikelListe - Liste der Artikel in dieser Gruppe
 */
class Gruppe {
    static counter = 1
    id = Gruppe.counter++
    index
    name
    artikelListe = []

    constructor(name, index) {
        this.name = name
        this.index = index
    }

    /**
     * Sucht einen Artikel anhand seines Namens
     * @param {String} suchName - Name des gesuchten Artikels
     * @param {Boolean} meldungAusgeben - steuert, ob eine Meldung ausgegeben wird
     * @returns {Artikel|null}
     */
    artikelFinden(suchName, meldungAusgeben) {
        // TODO: füge hier Deinen Code ein

        /* MEIN CODE */
        /* for (let artikel of this.artikelListe) {
             if (artikel.name == suchName) {
                 return artikel.index
             }
         }
         if (meldungAusgeben == true) {
             if(artikel.index == -1) {
                 console.warn("artikel nicht gefunden ", suchName)
             }
             else {
                 console.warn("artikel gefunden ", suchName)
             }
         }
         return null
     } */


        for (let artikel of this.artikelListe) {
            if (artikel.name == suchName) {
                return artikel
            }
        }
        if (meldungAusgeben) {
            console.debug("artikel nicht gefunden ", suchName)
        }
        return null
    }

    /**
     * Listet die Artikel in dieser Gruppe in der Konsole auf
     * @param {Boolean} gekauft - steuert die Anzeige der gekauften oder noch zu kaufenden Artikel
     */
    artikelAuflisten(gekauft) {
        // TODO: füge hier Deinen Code ein

    }

    /**
     * Fügt einen Artikel zur ArtikelListe hinzu und gibt diesen als Wert zurück
     * @param {String} name - Name des neuen Artikels
     * @returns {Artikel} neuerArtikel - der neu erzeugte Artikel
     */
    artikelHinzufuegen(name) {
        // TODO: doppelte Artikel abfangen!

        let vorhandenerArtikel = this.artikelFinden(name)
        if (!vorhandenerArtikel) {
            let neuerArtikel = new Artikel(name)
            this.artikelListe.push(neuerArtikel)
            return neuerArtikel
        }
        else {
        }
    }

    /**
     * Fügt einen Artikel zur ArtikelListe hinzu und gibt diesen als Wert zurück
     * @param {String} name - Name des neuen Artikels
     * @returns {Artikel} neuerArtikel - der neu erzeugte Artikel
     */
    artikelEntfernen(name) {
        // TODO: Artikel finden, position ermitteln
        /* MEIN CODE */
        /*let position = 0
        for (let i = 0; i < this.artikelListe.length; i++) {
            if (this.artikelListe[i] == name) {
                position = this.artikelListe.indexOf(i)
                this.artikelListe.splice(position, 1)
            } else {
                console.debug("Artikel ist nicht vorhanden und kann somit nicht entfernt werden")
            }
        }
    }*/

        let vorhandenerArtikel = this.artikelFinden(name, false)
        if (!vorhandenerArtikel) {
            let neuerArtikel = new Artikel(name, this.artikelListe.length)
            this.artikelListe.push(neuerArtikel)
            return neuerArtikel
        } else {
        }
    }
    artikelUmbenennen(alterName, neuerName) {

        let vorhandenerArtikel = this.artikelFinden(name, false)
        if (vorhandenerArtikel) {
            vorhandenerArtikel.name = neuerName
        }
        console.debug("Artikel wurde geändert von", alterName, "zu", neuerName)
    }
}

function main() {

    let zahl = 0
    let gruppe = new Gruppe("produktGruppe1", 0)
    gruppe.artikelHinzufuegen("artikel")
    gruppe.artikelHinzufuegen("artikel2")
    console.debug(gruppe.artikelListe)
    gruppe.artikelFinden("artikel")
    gruppe.artikelFinden("xxx", false)

    let gruppe2 = new Gruppe("produktGruppe2")
    gruppe2.artikelHinzufuegen("artikel3")
    gruppe2.artikelAuflisten(false)



}

main()

