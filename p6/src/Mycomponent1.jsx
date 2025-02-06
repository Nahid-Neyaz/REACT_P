//onChange = event handler used primarily with form element
//        ex. <input>, <textarea>, <select> ,<radio>
//Triggers a function every time the value of the input changes

import React, { useState } from 'react';


function Mycomponent1() {
    const [name,setName]=useState("Hippo");
    const [quantity,setQuantity]=useState(0);
    const [comment, setComment]= useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name:{name}</p>

        <input value={quantity} onChange={handleQuantityChange}></input>
        <p>Quantity:{quantity}</p>

        <textarea value={comment} onChange={handleCommentChange}
        placeholder='Enter Placeholder Text'/>
        <p>Comment: {comment} </p>

        <select vlaue={payment} onChange={handlePaymentChange}>
            <option value="">Select an option </option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            <option value="giftcard">GiftCard</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type='radio' value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
            ></input>
            Pick Up
        </label>
        <br/>

        <label>
            <input type='radio' value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
            ></input>
            Delivery
        </label>

        <p>Shipping: {shipping}</p>


    </div>)
}

export default Mycomponent1;