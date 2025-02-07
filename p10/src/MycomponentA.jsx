import React,{useEffect, useState} from "react";
function MycomponentA(){

    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("event listener added");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("event listener removed");
        }
    },[]);

    useEffect(() =>{
        document.title =`Size:${width} x ${height}`;
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <>        
        <p>Window width:{width}px</p>
        <p>Window Height:{height}px</p>
        </>
    )
   
}
export default MycomponentA;