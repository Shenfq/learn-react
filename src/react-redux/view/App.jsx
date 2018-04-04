import React, { Component } from 'react'
import '../../style/App.css'
import Provider from './Provider'
import Counter from './Counter'
import Summary from './Summary'

import store from '../Store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <br/>
        <Summary />
      </Provider>
    );
  }
}

export default App;
