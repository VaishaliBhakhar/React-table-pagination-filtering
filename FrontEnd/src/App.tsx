import React from 'react';
import './App.css';
import MusicFestival from './components/dataView';

function App(){
      return (
      <div className="App">
        <header className="App-header">
        {/* {data.map((row) => (
          <div key={row.FMID}>{row}</div>
        ))} */}
        <MusicFestival />
        </header>
      </div>
    );
}

export default App;