# impress-react-component
**Impress.js simple components for React**

You can use the component easily,
first thing to do is to install the package:
```shell
npm install impress-react-component
```

Then import and work with it in your react application, for example:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Slide } from 'impress-react-component'

class App extends React.Component {
  render () {
    return (
      <Presentation>
        <Slide y={500} z={100}>
          <h1>Hello</h1>
        </Slide>
        <Slide rotate={90}>
          <h1>Impress</h1>
        </Slide>
      </Presentation>
    );
  }
};

ReactDOM.render(<App />, document.body)
```

Here's a list of components you can use:

###Presentation
The main component which includes all other impress components, you need this to define a new presentation

_Presentation_ props:
- **style:**
styling the main div of presentation _[object]_
- **width:**
a global width for all slides of presentation _[number]_
- **height:**
a global height for all slides of presentation _[number]_

###Slide
Defines a slide of your presentation

_Slide_ props:
- **style:**
styling the main div of slide _[object]_
- **position:**
Slide's position in an object like {x: 10, y: 20, z: 30} or array like [10, 20, 30] _[object or array]_
- **x:**
Slide's position-x _[number]_
- **y:**
Slide's position-y _[number]_
- **z:**
Slide's position-z _[number]_
- **rotation:**
Slide's rotation in an object like {x: 10, y: 20, z: 30} or array like [10, 20, 30] _[object or array]_
- **rotateX:**
Slide's rotation-x _[number]_
- **rotateY:**
Slide's rotation-y _[number]_
- **rotateZ:**
Slide's rotation-z _[number]_
- **width:**
width of slide's main div _[number]_
- **height:**
height of slide's main div _[number]_

===

###_(Work on progress)_