import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Corps = () => {
  const [product, setArticles, name, price, addToCart, counter, setCounter] = useState([]);

  const handleAddToCartClick = () => {
    addToCart(price);
    setCounter(counter + 1);

  }
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://laura-boutique/product/0', {
      method: 'GET',
      body: JSON.stringify({ with: ['account_user', 'category', "sub_category"] })
    })
      .then(response => response.json())
      .then(json => {
        json = json.sort(

          (a, b) => {
            return new Date(a.created_at) > new Date(b.created_at) ? -1 : 1
          });
        setArticles(json);
      })


  },
    [])



  return (
    <div>
      <h1> Soins pour le corps </h1>
      <table className='table'>
        <thead>
          <tr className='mt-3'>
            <td className="card">
              <img 
                className="card-img-top"
                alt={product.image} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}€</p>
                <button className="btn btn-secondary" onClick={handleAddToCartClick}>Ajouter au panier</button>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {product.map(product => {
            return (<tr key={product.Id_product} onClick={() => { navigate(`/product/${product.Id_product}`) }}>
              {/* attention Ã  bien emballer navigate dans une fonction sinon la redirection s'effectue automatiquement */}
            </tr>);
          })}


        </tbody>


      </table>



    </div>
  );
};

export default Corps; 