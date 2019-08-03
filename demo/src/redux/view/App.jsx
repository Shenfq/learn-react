import React, { Component } from 'react';
import '../../style/App.css';
import Counter from './Counter';
import Summary from './Summary';

const divStyle = {
  margin: '20px'
}

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <Summary />
      </div>
    );
  }
}

export default App;
