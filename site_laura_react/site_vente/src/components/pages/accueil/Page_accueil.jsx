import React from 'react';
import "../accueil/Page_accueil.css";

const Page_accueil = () => {
    return (
        <div>
            <h2 className="new d-flex justify-content-center">Nouveautés</h2>

            <div className="container-fluid m-auto ">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/laura.jpg" className="d-block w-7 h-5" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/trio.jpg" className="d-block w-7 h-5" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/trio2.jpg" className="d-block w-7 h-5" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page_accueil;