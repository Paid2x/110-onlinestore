import { useState } from 'react';
import "./Admin.css";

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        titile: "",
        price: "",
        image: "",
        category: "",
    });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log(name, text);

        const copy = { ...coupon };
        copy.code = text;
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className="parent">
                <div className="products">
                    <div className="form">
                        <h3>Register a Product</h3>
                    </div>
                    <div>
                        <label className='form-label'>Title</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="title" />
                    </div>
                    <div>
                        <label className='form-label'>Image</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="image" />
                    </div>
                    <div>
                        <label className='form-label'>Category</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="category" />
                    </div>
                    <div>
                        <label className='form-label'>Price</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="Price" />
                    </div>

                    <div className="controls">
                        <button className="btn btn-outline-primary" onClick={saveProduct}>Save Product</button>
                    </div>
                    {allProducts.map(prod => (
                    <li className='prod'>
                        <img src={prod.image} alt='' />
                        <h5>{prod.title}</h5>
                        <label>${prod.price}</label>
                    </li>
                ))}
                </div>
                <div className="coupons">
                    <div className="form">
                        <h3>Register a Coupon</h3>

                        <div>
                            <label className='form-label'>Code</label>
                            <input type="text" className="form-control" onBlur={handleCoupon} name="code" />
                        </div>

                        <div>
                            <label className='form-label'>Discount</label>
                            <input type="number" className="form-control" onBlur={handleCoupon} name="discount" />
                        </div>


                        <div className='controls'>
                            <button className='btn btn-outline-dark' onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </div>

                    {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}


                </div>
            </div>
        </div>
    );
}
export default Admin