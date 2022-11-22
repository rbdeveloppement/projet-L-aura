import React from "react";
import { Link } from "react-router-dom";
import "./css.css";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="row">
            <footer id="footer">
                <div className="mx-auto mb-4">
                    <div className="grid-container">
                        <div className="col-sm">
                            <h3>S'y rendre</h3>
                            <div>
                                <ul>
                                    <li> 📍 58 rue Foch 59141 Iwuy</li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <h3>Horaires Boutique</h3>
                            <div>
                                <p>Lundi : Fermé</p>
                                <p>Mardi : 10h-12h / 14h-19h</p>
                                <p>Mercredi : 10h-12h / 14h-19h</p>
                                <p>Jeudi : 10h-12h / 14h-19h</p>
                                <p>Vendredi : 10h-12h / 14h-19h</p>
                                <p>Samedi : 10h-13h / 15h-18h</p>
                            </div>
                        </div>

                        <div>
                            <div className="info col-sm">
                                <h3>Information</h3>
                                <ul>
                                    <li>
                                        <Link to="/pages/lequipe" className="">
                                            La team L'Aura
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pages/retours-echanges" className="">
                                            Retours &amp; échanges
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./contact.html" className="">
                                            Nous contacter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pages/conditions-generales-de-ventes"
                                            className="link link--text list-menu__item list-menu__item--link">
                                            Conditions générales de ventes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lien">
                    <h4>Nous suivre sur les reseaux</h4>
                    <Link to="https://www.instagram.com/laura_concept_store/?hl=fr"><BsInstagram/></Link>
                    <Link to="https://www.facebook.com/lauraconceptstore"><BsFacebook/></Link>
                    <Link to="http://@l_aura_concept_store"><FaTiktok/></Link>
                
                </div>
            </footer>
        </div>
    );
};

export default Footer;
