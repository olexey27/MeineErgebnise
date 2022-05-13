class Artikel {
    counter = 1
    constructor(name, position, gekauft, id) {
        this.id = Artikel.counter++
    }
}

export {Artikel}