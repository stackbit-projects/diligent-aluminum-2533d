import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Slide } from '../../src/index.js'

class App extends React.Component {
  render () {
    return (
      <Presentation>
        <Slide>
          <blockquote>You know,<br />someone once told me</blockquote>
        </Slide>
        <Slide y={-900} z={-500} rotate={45} rotateX={-200}>
          <blockquote>time is a flat circle.</blockquote>
        </Slide>
        <Slide y={-1000} x={1000} z={-1000} rotate={90} rotateX={-45} rotateY={90}>
          <blockquote>Everything we’ve ever done or will do</blockquote>
        </Slide>
        <Slide y={-600} x={1800} z={-500} rotate={45} width={800}>
          <blockquote>we’re gonna do over and over and over again</blockquote>
        </Slide>
        <Slide y={-600} x={800} z={500} rotate={45} rotateX={180}>
          <blockquote>just go forward, and you see everything again</blockquote>
        </Slide>
      </Presentation>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementsByClassName('app-react')[0]
)
