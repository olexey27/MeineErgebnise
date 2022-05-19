import React from 'react'
import GruppenTag from './components/GruppenTag'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="container">
          <header>
              <h1>Einkaufsliste</h1>
              <input type="text" placeholder="Artikel hinzufügen"/>
                  <select name="Kategorie">
                      <option value="O1">Kategorie</option>
                      <option value="O1">Gemüse</option>
                      <option value="O2">Obst</option>
                      <option value="O3">Wurst</option>
                      <option value="O4">Käse</option>
                  </select>
          </header>
          <hr/>
              <main>
                  <section>
                      <h2>Einkaufen</h2>
                      <dl>
                        <GruppenTag/>
                      </dl>
                  </section>
                  <hr/>
                      <section>
                          <h2>Erledigt</h2>
                          <GruppenTag/>
                      </section>
              </main>
              <hr/>
                  <footer>
                      <button><span className="material-symbols-outlined">group</span> Gruppen
                      </button>
                      <button><span className="material-symbols-outlined">menu</span> Sortieren
                      </button>
                      <button><span className="material-symbols-outlined">settings</span> Einstellungen
                      </button>
                  </footer>
      </div>
    )
  }
}

export default ShoppingList
