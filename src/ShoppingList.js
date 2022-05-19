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
              <h1>Watch Chain</h1>
              <input type="text" placeholder="Favoriten hinzufügen"/>
              <link rel="stylesheet"
                    href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
                  <select name="Kategorie">
                      <option value="O1">Neue</option>
                      <option value="O1">Beliebt</option>
                      <option value="O2">Alt</option>
                      <option value="O3">Preis Steigend</option>
                      <option value="O4">Preis Absteigend</option>
                  </select>
          </header>
          <hr/>
              <main>
                  <section>
                      <h2>NFT's</h2>
                      <dl>
                        <GruppenTag/>
                      </dl>
                  </section>
                  <hr/>
                      <section>
                          <h2>Hinzugefügten</h2>
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
