import React from 'react';
import { Link } from 'react-router-dom';
import "./Cosmetique.css";

const Cosmetiques = () => {
    return (
        <div>
            <div className="container CosCard ">


                <div className="card-group mb-5 mt-3 w-50">
                    <div className="card">
                        <div className="card-body">
                            <img src="./images/tshirt.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Visage</h5>
                            <p className="card-text">Retrouvez tous nos soins visage en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/Visage" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src="./images/jean.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Corps</h5>
                            <p className="card-text">Retrouvez tous nos soins pour le coprs en cliquant en dessous</p>
                        </div>
                        <div className="align-self-center">
                            <Link to="/Corps" className="btn btn-secondary">Aller voir</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cosmetiques;