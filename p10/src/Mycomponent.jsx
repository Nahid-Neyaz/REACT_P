//useEffect()-> React hook that tells React DO SOME CODE WHEN(pick one):
//            This Component re-renders
//            This component mounts
//            the state of a value

//useEffect(function, [dependencies])

//1. useEffect(() => {})       Runs after every re-render
//2. useEffect(() => {},[])    Runs only on Mount
//3. useEffect(() => {},[value]) //Runs on mount+when value changes

//Uses
//1.Event Listeners
//2. DOM manipulation
//3.Subscriptions (real-time updates)
//4. Fetching Data from an API
//5. Clean up when a component  unmounts
import React, { useEffect, useState } from "react";

function Mycomponent(){
    
    const [count,setCount]=useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title=`Count: ${count} ${color}`;
    },[count,color]);

    function addCount(){
        setCount(c => c+1);
    }

    function subtractCount(){
        setCount(c => c-1);
    }

    function changeColor(){
        setColor(c=> c=="green"? "red" : "green");
    }

    return(
        <>
        <p style={{color:color}}>Count:{count}</p>
        <button  onClick={addCount}>Add</button>
        <button  onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export default Mycomponent;