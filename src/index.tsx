import * as React from 'react'
import { render } from 'react-dom'
import Home from '../src/components/Home'
import '../src/assets/styles/main.scss'

class App extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}

render(<App />, document.getElementById('catch'));