import React, { useState } from 'react';


const PageManteaux = ({title, price, imageId, addToCart}) => {
    const [counter, setCounter] = useState(0);


  const handleAddToCartClick = () =>  {
   addToCart(price);
   setCounter(counter + 1);

  }

    return (
      <>
      <h1 className='titlePage' >Nos vestes et manteaux</h1>
        <div className='mt-3'>
              <div className="card">
        <img
          src={"https://picsum.photos/id/" + imageId + "/600/400"}
          classname="card-img-top"
          alt={title}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}€</p>
          <button className="btn btn-secondary" onClick={handleAddToCartClick}>Ajouter au panier</button>
        </div>
      </div>
        </div>
        </>
    );
};

export default PageManteaux;