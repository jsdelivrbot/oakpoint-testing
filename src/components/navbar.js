import React, { Component } from 'react'
import styled from 'styled-components'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
  }

  render() {
    return (
      <div>
        <h1>Hieeee</h1>
        {this.state.open && <h2>Butt</h2>}
      </div>
    )
  }
}

export default Navbar
