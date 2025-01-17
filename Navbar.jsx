import {useContext} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';


function Navbar() {

   const {user, cart} = useContext(DataContext);

    return (

        <nav className="navbar navbar-expand-lg">

            <div className="container-fluid">

                <Link className="navbar-brand" href="/">

                    OnlineStore

                </Link>

                <button

                    className="navbar-toggler"

                    type="button"

                    data-bs-toggle="collapse"

                    data-bs-target="#navbarSupportedContent"

                    aria-controls="navbarSupportedContent"

                    aria-expanded="false"

                    aria-label="Toggle navigation"

                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/">

                                Home

                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/catalog">

                                Catalog

                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/about">

                                About

                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/admin">

                                Admin

                            </Link>

                        </li>
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/contact">

                                Contact us

                            </Link>

                        </li>
                    </ul>

                    <form className="d-flex" role="search">

                        <label className='btn btn-outline-light'>{user.name}</label>

                        <Link className="btn btn-outline-light ms-2" to="/cart">

                           <span className= 'badge text-bg-light'> {cart.length}</span> View Cart 

                        </Link>

                    </form>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;