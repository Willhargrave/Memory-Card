import React, { useState } from "react";
import randomEggs from "./Eggs";
import Card from "./Card";
import "./styles/App.css"
function Score() {
    const [count, setCount] = useState(0);
    const [best, setBest] = useState(0);
    const[guess, setGuess] = useState([]);

    function incrementScore() {
        setCount(prevCount => prevCount + 1)
    }
   
    function resetScore() {
        setCount(0)
        if (count > best){
            setBest(count)
        }
    }
    function handleClick(Egg) {
        if (guess.includes(Egg)){
            resetScore();
            return;
        }
        setGuess(guess.concat(Egg));
        incrementScore();
    }
    return (
        <div>
        <header>
            <h1>🥚<span>{count}</span></h1>
            <h1>Don't pick the same guy twice!</h1>
            <h1><span>{best}</span>🏆</h1>
        </header>
            <div className='Grid'>
          {randomEggs().map((Egg) => <Card key={Egg.id} Egg={Egg} handleClick={handleClick}/>)}
        </div>
        </div>
    )
    
}


export default Score