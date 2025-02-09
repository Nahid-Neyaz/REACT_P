//useState()= Re-renders the component when the state value changes.
//useRef() =  use-refference does not cause re -renders when its value
//            changes. when you want a component to remember some information,
//            but you don't want that info. to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2. Handling focus, Animations, and transitions
// 3. Managing Timers and Intervals

import React,{useState,useRef,useEffect} from "react";

function MyComponent(){

    // let [number, setNumber] = useState(0); it rerenders
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        console.log(inputRef)
    });

    function handleClick(){
        // setNumber(n => n+1);// when we use useState()
        ref.current++;
        console.log(ref.current);
    }
    return(
    <>
    <button onClick={handleClick}>
          Touch me! </button>);
    <input ref={inputRef}></input>
    </>
    );

}
export default MyComponent;