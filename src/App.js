import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

let allword = ['Apple','banana','hello','react','javascript','yarn']

function App() {
  const midset = 'midset'
  const className1 = 'reloadbotton'
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div style={styles.style}>
      <WordCard value={allword}/>
      <button onClick={refreshPage} className = {className1}>Click to reload!</button>
    </div>
  );
}

export default App;

const styles = ({
  style : {
      display: "flex",
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
    }
})