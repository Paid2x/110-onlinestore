import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="home page">
            <div className="text">
                <h2>Welcome to OnlineStore!</h2>
                <h4>Latest Tech, Buy Now!</h4>

                <Link className='btn btn-large btn-primary' to="/catalog">
                    Click here for products
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </Link>
            </div>
            <img src="/images/Home.jpg" alt=""></img>
        </div>
    );
}

export default Home;