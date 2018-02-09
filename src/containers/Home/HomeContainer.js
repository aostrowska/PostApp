import React, { PureComponent, Fragment } from 'react'
import { firebaseDB } from '../../api/firebase'

import { speedValue } from '../../api/spped'

class Home extends PureComponent {
  constructor() {
    super()

    this.testDatabase = firebaseDB
    this.speedValue = speedValue

    this.state = {
      speed: 0,
      loaded: false
    }
  }

  componentWillMount() {
    this.speedValue.on('value', (snap) => {
      this.setState({
        speed: snap.val(),
        loaded: true
      })
    })
  }

  increaseSpeed = () => {
    this.testDatabase.set({
      speed: this.state.speed + 1
    })
  }

  render() {
    return (
      <Fragment>
        <p>Home!</p>
        {this.state.speed}
        <button onClick={this.increaseSpeed} disabled={!this.state.loaded}>
          increase!
        </button>
      </Fragment>
    )
  }
}

export default Home
