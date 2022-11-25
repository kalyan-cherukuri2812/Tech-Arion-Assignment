import {Component} from 'react'

import Counter from './components/counter'
import GetRequest from './components/GetRequest'
import PostRequest from './components/PostRequest'

class App extends Component {
  render() {
    return (
      <>
        <Counter />
        <GetRequest />
        <PostRequest />
      </>
    )
  }
}

export default App
