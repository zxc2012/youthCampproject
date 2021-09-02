import './ProductPage.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
const ProductPage = ({match}) => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`/api/products/${match.params.id}`)
          .then(res=>
            setProduct(res.data)
          )            
          .catch((err) => {
            setError(err);
          })
          .finally(()=>{
            setLoading(false);
          });
      }, []);
    const addToCartHandler=()=>{

    }
    return (
        <div className="productpage">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="productpage__left">
              <div className="left__image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            </div>
            <div className="productpage__right">
              <div className="right__info">
                <p>
                  Price:
                  <span>${product.price}</span>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    )
}

export default ProductPage;
