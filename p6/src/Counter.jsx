import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState();
 // we can also use updater function 
 //based on previous sate and not current state
    const increment = () =>{
        setCount(count+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }

    const decrement = () =>{
        setCount(count-1);
        setCount(c=> c-1);
        setCount(c=> c-1);
        setCount(c=> c-1);
        

    }

    const reset = () => {
        setCount(0);
        setCount(c=>c=0);
    }

    return (<div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement} >Decrement</button>
            <button className="counter-button" onClick={reset} >RESET</button>
            <button className="counter-button" onClick={increment} >Increment</button>
            </div>)


}
export default Counter;