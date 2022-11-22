import React from 'react';
import { Link } from 'react-router-dom';
import "./css.css";
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="text-center"><img className="logo" src="images/logoBlancDetail.png" alt="" /></div>
                    <h2 className="text-center">L'Aura Concept Store</h2>
                </div>
                <div className="d-flex justify-content-center">
                <button id="cart" to="https://www.instagram.com/laura_concept_store/?hl=fr"><FaShoppingCart/></button>
                </div>
                <div className="d-flex justify-content-center"><Link to="lienConnexion">connexion</Link></div>
            </div>

        </div>
    );
};


export default Header;