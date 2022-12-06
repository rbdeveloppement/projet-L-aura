import React from 'react';
import { Link } from 'react-router-dom';

const Accessoires = () => {
    return (
        <>
        <div>
            <div>
                <div className="container">
                    <div className="card-group mb-5 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/bijoux.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bijoux</h5>
                                <p className="card-text">Retrouvez touts Bijoux en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Bijoux" className="btn btn-secondary">Bijoux</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/ceinture.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Ceintures</h5>
                                <p className="card-text">Retrouvez toutes nos Ceintures en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Ceintures" className="btn btn-secondary">Ceintures</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/sac.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Sacs</h5>
                                <p className="card-text">Retrouvez tous nos Sacs en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Sacs" className="btn btn-secondary">Sacs</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/chaussure.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Chaussures</h5>
                                <p className="card-text">Retrouvez toutes nos Chaussures en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                            <Link to="/Chaussures" className="btn btn-secondary">Chaussures</Link>
                        </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/echarpe.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Echarpes</h5>
                                <p className="card-text">Retrouvez toutes nos Echarpes en cliquant en dessous</p>
                            </div>
                            <div className="align-self-center">
                                <Link to="/Echarpes" className="btn btn-secondary">Echarpes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Accessoires;