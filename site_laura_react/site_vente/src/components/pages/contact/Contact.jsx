import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <>
            <div className="container contact">

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nom" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Prénom" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Mail" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="votre message"
                    rows="3"></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-secondary mb-3">Envoyer</button>
            </div>
        </div>

</>
    );
};

export default Contact;