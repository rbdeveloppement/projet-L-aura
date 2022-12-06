import React from 'react';
import { Link } from 'react-router-dom';


const PretAPorter = () => {
    return (
       
        <div>
            <div className="container">


                <div className="card-group mb-5">
                    <div className="card">
                        <div className="card-body">
                            <img src="./images/tshirt.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Hauts</h5>
                            <p className="card-text">Retrouvez tous nos hauts en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/PageHauts" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div><div className="card">
                        <div className="card-body">
                            <img src="./images/jean.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Bas</h5>
                            <p className="card-text">Retrouvez tous nos bas en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/PageBas" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src="./images/jupe.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Jupes et Robes</h5>
                            <p className="card-text">Retrouvez toutes nos jupes et robes en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/PageJupes" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src="./images/blazer.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">manteaux et Vestes</h5>
                            <p className="card-text">Retrouvez tous nos manteaux et Vestes en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/PageManteaux" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default PretAPorter;