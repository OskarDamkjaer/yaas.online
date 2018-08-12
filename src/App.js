import React, { Component } from 'react';
import YellowBox from './components/YellowBox'
import itWasAllYellow from './utils/allYellows'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Yellow as a service</h1>
        </header>
        {
          itWasAllYellow.map(yellow => <YellowBox name={yellow.name} hex={yellow.hex}/>)
        }
      </div>
    );
  }
}

export default App;
