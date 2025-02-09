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
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        //console.log(inputRef)
    });

    function handleClick1(){
        // setNumber(n => n+1);// when we use useState()
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        // setNumber(n => n+1);// when we use useState()
        // ref.current++;
        // console.log(ref.current);
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        // setNumber(n => n+1);// when we use useState()
        // ref.current++;
        // console.log(ref.current);
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return(
    <>
    <button onClick={handleClick1}>
          Touch me! </button>);
    <input ref={inputRef1}></input>

    <button onClick={handleClick2}>
          Touch me, more! </button>);
    <input ref={inputRef2}></input>

    <button onClick={handleClick3}>
          Touch me ,more more! </button>);
    <input ref={inputRef3}></input>
    </>
    );

}
export default MyComponent;