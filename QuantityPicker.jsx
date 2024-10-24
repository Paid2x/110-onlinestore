import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);


    function handleIncrease() {
        let value = quantity + 1;
        setQuantity(value);
        props.onChange();
    }

    function handleDecrease() {
        if (quantity == 1) return;

        let value = quantity - 1;

        setQuantity(value);
    }

    return (
        <div className="qt-picker">

            <button className='btn btn-sm btn-dark' disable={quantity === 1} onClick={handleDecrease}>-</button>

            <label>{quantity}</label>

            <button className='btn btn-sm btn-dark' onClick={handleIncrease}>+</button>

        </div>
    );
}


export default QuantityPicker;