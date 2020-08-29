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

export default function WordCard(props){
    const className1 = 'reloadbotton'
    const word1 = props.value[Math.floor(Math.random() * 6)];
    const [state, setState] = useState(prepareStateFromword(word1))
    let sethelp = state.help-1
    // let helpguess = state.guess + state.word.charAt(state.check)
    function help(){ 
        console.log(`${state.word.charAt(state.check)} has been activated`)
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
            <botton onClick = {help} className = {className1}>Help</botton>
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