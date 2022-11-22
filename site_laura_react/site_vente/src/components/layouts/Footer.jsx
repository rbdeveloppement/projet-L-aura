import React from "react";
import { Link } from "react-router-dom";
import "./css.css";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';



const Footer = () => {
    return (
        <footer className="backgroundFooter text-center text-lg-start text-dark">

            <div className="container mt-5 p-4">

                <div className="row my-4">



                    <div className="col-sm">
                        <h3>S'y rendre</h3>
                        <div className="">
                            <ul>
                                <li> 📍 58 rue Foch 59141 Iwuy</li>

                            </ul>
                            <div className="maps-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.0986447022597!2d3.319445215890238!3d50.23406201081378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2be1480cf519f%3A0xb33d915de38ee6b1!2s58%20Rue%20du%20Mar%C3%A9chal%20Foch%2C%2059141%20Iwuy!5e0!3m2!1sfr!2sfr!4v1669113477072!5m2!1sfr!2sfr" width="auto" height="auto"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
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
            <div id="lien">
                <h4>Nous suivre sur les reseaux</h4>
                <Link to="https://www.instagram.com/laura_concept_store/?hl=fr"><BsInstagram /></Link>
                <Link to="https://www.facebook.com/lauraconceptstore"><BsFacebook /></Link>
                <Link to="http://@l_aura_concept_store"><FaTiktok /></Link>

            </div>


            <div className="text-center p-3">
                © 202 Copyright:
                Bernier Rémi
            </div>

        </footer>



    );
};

export default Footer;
