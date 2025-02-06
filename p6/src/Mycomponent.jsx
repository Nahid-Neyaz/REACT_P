import React, { useState } from "react";

function Mycomponent(){
    let [name,setName]=useState("Guest");
    const [age, setAge] = useState(0) ;
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        // name="hippo";
        // console.log(name);
        setName("hippo");
    }
    const updateAge= ()=>{
        setAge(age+3);
    }
    const updateES =()=>{
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>
            <p> Age:{age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p> Employed:{isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateES}>Set Employed status</button>

        </div>
    )

}

export default Mycomponent;