import React from 'react';
import { Link } from 'react-router-dom';

const Boutique = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="card-group mb-5 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/jupe.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Prêt-a-porter</h5>
                                <p className="card-text">Retrouvez toutes nos collections en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/PretAPorter" className="btn btn-secondary">Prêt-a-porter</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/cosmetique.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Cosmétiques</h5>
                                <p className="card-text">Retrouvez tous nos Cosmétiques en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Cosmetiques" className="btn btn-secondary">Cosmétiques</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/bijoux.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Accessoires</h5>
                                <p className="card-text">Retrouvez tous nos Accessoires en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Accessoires" className="btn btn-secondary">Accessoires</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/atelier.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Ateliers</h5>
                                <p className="card-text">Les ateliers sont en cours de développement</p>
                            </div>
                            {/* <div className="align-self-center">
                            <Link to="#" className="btn btn-secondary">Aller voir</Link>
                        </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boutique;