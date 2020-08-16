import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

let allword = ['Apple','banana','hello','react','javascript','yarn']

function App() {
  const className1 = 'reloadbotton'
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <WordCard value={allword}/>
      <button onClick={refreshPage} className = {className1}>Click to reload!</button>
    </div>
  );
}

export default App;
