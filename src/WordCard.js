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
        complete: false
    }
}

export default function WordCard(props){
    const word1 = props.value[Math.floor(Math.random() * 6)];
    const [state, setState] = useState(prepareStateFromword(word1))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length ==  state.word.length){
            if(guess == state.word){
                console.log('yeah !')
                setState({...state, complete: true})
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess : '' , attempt : state.attempt + 1})
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
        </div>
    )
}