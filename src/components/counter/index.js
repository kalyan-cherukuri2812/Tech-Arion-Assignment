import './index.css'

import {Component} from 'react'

export default class Counter extends Component {
  state = {counter: 1}

  decriesclick = () => {
    const {counter} = this.state

    if (counter >= 2) {
      this.setState(prev => ({counter: prev.counter - 1}))
    }
  }

  increserClick = () => {
    this.setState(prev => ({counter: prev.counter * 3}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="counter-bg">
        <h1 className="counter-heading">Counter</h1>
        <div className="counter-div">
          <button onClick={this.decriesclick} className="btn" type="button">
            -
          </button>
          <h1 className="count-h">{counter}</h1>
          <button onClick={this.increserClick} className="btn" type="button">
            +
          </button>
        </div>
      </div>
    )
  }
}
