import React, { useState } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromword = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        complete: false,
        help:1,
        check:0,
    }
}
const helpchar = given_word =>{
    return {
        help : '',
        current : true,
    }
}

export default function WordCard(props){
    const className1 = 'reloadbotton'
    const word1 = props.value[Math.floor(Math.random() * 6)];
    const word2 = 'help'
    const [state, setState] = useState(prepareStateFromword(word1))
    const [help, sethelp] = useState(helpchar(word2))
    function helper(){ 
        if(help.current == true){
            console.log(`${state.word.charAt(state.check)} has been activated`)
            const charhelp = state.word.charAt(state.check)
            sethelp({...help , help : charhelp , current : 'false'})
        }
    }
    const activationHandler = c => {
        console.log(`${c} has been activated`)
        let check = state.check + 1
        let guess = state.guess + c
        
        setState({...state, guess , check})
        console.log(`${state.check} has been activated`)

        if(guess.length ==  state.word.length){
            if(guess == state.word){
                console.log('yeah !')
                setState({...state, complete: true})
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess : '' , attempt : state.attempt + 1 , check : 0})
                console.log(state.attempt)
            }
        }
    }

    return (
        <div>
            { 
                state.chars.map((c,i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
            <botton onClick = {helper} className = {className1} style = {styles.style}>Click for 1 Help : {help.help}</botton>
        </div>
    )
}
const styles = ({
    style : {
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
      }
  })