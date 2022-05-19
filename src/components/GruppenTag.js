import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
          <dt><span>CryptoPunks</span></dt>
          <ArtikelTag/>
        <ArtikelTag/>
        <ArtikelTag/>
      </React.Fragment>
    )
  }
}

export default GruppenTag
