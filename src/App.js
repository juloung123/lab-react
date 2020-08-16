import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

let allword = ['Apple','banana','hello','react','javascript','yarn']

const word = allword[Math.floor(Math.random() * 6)];

function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
