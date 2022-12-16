import React from 'react';
import "./css.css";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="text-center"><img className="logo" src="images/logoBlancDetail.png" alt="" /></div>
                    <h2 className="text-center">L'Aura Concept Store</h2>
                </div>
                <div className="d-flex justify-content-center">
                <Link id="cart"  to="/Panier"><FaShoppingCart/></Link>
                </div>
            
            </div>

        </div>
    );
};


export default Header;