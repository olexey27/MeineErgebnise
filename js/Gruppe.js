import Artikel from './Artikel'
import App from './Shopping'

class Gruppe {
    counter = 1
    constructor(name, index, artikelListe, id) {
        this.id = Artikel.counter++
    }
    artikelAuflisten(gekauft) {
        function ArtikelAuflisten (gekauft) {
            for (let artikel of this.artikelListe) {
                if (gekauft == gekauft) {
                    return `${artikel.name}`
                }
            }
        }
    }
}

export {Gruppe}