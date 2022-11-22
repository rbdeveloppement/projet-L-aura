import React from "react";
import { Link } from "react-router-dom";
import "./css.css";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="#">L'Aura</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="nav-item">
                                <Link className="nav-link active" to="./site_vente.html">Accueil</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="#">Boutique</Link>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="pagePretAPorter" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Prêt à porter
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Haut</Link>
                                    <Link className="dropdown-item" to="#">Bas</Link>
                                    <Link className="dropdown-item" to="#">Jupes et Robes</Link>
                                    <Link className="dropdown-item" to="#">Manteau et Vestes</Link>
                                </ul>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="pageCosmetiques" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Cosmétiques
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">Corps</Link>
                                    <Link className="dropdown-item" to="#">Visage</Link>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="pageAtelier">Ateliers</Link>
                            </div>

                        </ul>
                      
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="..." aria-label="Search" />
                            <button className="btn btn-outlinkne-success" type="submit">Recherher</button>
                        </form>
                        <div className="d-flex justify-content-center"><Link to="lienConnexion">connexion</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
