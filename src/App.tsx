import * as React from 'react';
import './App.css';

import IsaDemo from './IsaDemo';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://ca.slack-edge.com/TCT9XGFPU-UCU1LH077-7e8cbbd2f20b-72" />
          <h1 className="App-title">How done is Isa?</h1>
        </header>
        <IsaDemo
          doneLevels={[
            '',
            'Done.',
            'So done.',
            'Actually done.',
            'Literally done.',
            "NOW I'm done.",
            'Actually done with you guys.',
          ]}
        />
      </div>
    );
  }
}

export default App;
