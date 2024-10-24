import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";

function Cart() {

    const { cart } = useContext(DataContext);

    function getTotal() {
        let total = 0;
        for(let i = 0; i< cart.length; i++) {
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }
        return total.toFixed(2);
    }

    return (
        <div className="cart page">
            <h1>Got everything?</h1>
            <h4>Let's Proceed to Payment <b>{cart.length}</b> items.</h4>

            <div className="parent">
                <div className="list">
                    {cart.map(prod => <div className="prod-cart">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>{prod.price}</label>
                        <label>{prod.quantity}</label>
                        <label>{prod.total * prod.quantity}</label>
                        <button className='btn btn-sm btn-outline-danger'>
                            <i class="fa-regular fa-trash-can"> </i>
                        </button>
                    </div>
                    )}


                </div>
                {
                cart.length > 0 ?
                <div className='side'>
                    <h4>Total</h4>
                    <h3>${getTotal()}</h3>

                    <button className='btn btn-primary'>Proceed to payment</button>
                </div>

                : null
}
            </div>
        </div>
    );
}

export default Cart;