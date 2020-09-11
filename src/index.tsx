import * as React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <p>test</p>
    )
  }
}

render(<App />, document.getElementById('catch'));