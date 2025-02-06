


function Button(){

    // const handleClick= () =>
    //     console.log("OUCH!")
    // let count=0;

    // const handleClick=(name)=>{
    //     if(count<3)
    //     {
    //         count++;
    //         console.log(`${name} You clicked me ${count} times`)
    //     }
    //     else
    //     {
    //         console.log(`${name} Stop clicking me`)
    //     }
            

    // }

    const handleClick = (event)=>event.target.textContent= "Ouch";

   // const handleClick2=(name)=>console.log(`${name} Stop Clicking me`)

// return <button onClick={()=>handleClick2("Mingo")}>Click Me!</button>
// }

    return <button onDoubleClick={(event) => handleClick(event)}>Click Me!</button>
}

export default Button;