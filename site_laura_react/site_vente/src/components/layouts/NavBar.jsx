import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css.css";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <div className="navbar-brand">L'Aura</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="nav-item">
                                <Link className="nav-link active" to="/">Accueil</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/Boutique">Boutique</Link>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="pagePretAPorter" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Prêt à porter
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Hauts">Haut</Link>
                                    <Link className="dropdown-item" to="/Bas">Bas</Link>
                                    <Link className="dropdown-item" to="/Jupes">Jupes et Robes</Link>
                                    <Link className="dropdown-item" to="/Manteaux">Manteau et Vestes</Link>
                                </ul>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="pageCosmetiques" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Cosmétiques
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Corps">Corps</Link>
                                    <Link className="dropdown-item" to="/Visage">Visage</Link>
                                </ul>
                            </div>
                            <div className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="pagePretAPorter" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Accessoires
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Bijoux">Bijoux</Link>
                                    <Link className="dropdown-item" to="/Ceintures">Ceintures</Link>
                                    <Link className="dropdown-item" to="/Sacs">Sacs</Link>
                                    <Link className="dropdown-item" to="/Chaussures">Chaussures</Link>
                                    <Link className="dropdown-item" to="/Echarpes">Echarpes</Link>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="pageAtelier">Ateliers</Link>
                            </div>

                        </ul>
                      
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="..." aria-label="Search" />
                            <button className="btn btn-outlinkne-success" type="submit">Rechercher</button>
                        </form>
                        <div className="d-flex justify-content-center"><Link to="/Connexion">connexion</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
