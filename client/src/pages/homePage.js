import './HomePage.css';
import Product from './Product.js';
import { useState,useEffect } from 'react';
import axios from "axios";
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("/api/products")
          .then(res=>
            setProducts(res.data)
          )            
          .catch((err) => {
            setError(err);
          })
          .finally(()=>{
            setLoading(false);
          });
      }, []);
    return (
        <div className="homepage_products">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
            <h2>{error}</h2>
            ) : products.map(product=>
            <Product id={product._id}name={product.name} imageUrl={product.imageUrl} description={product.description} price={product.price} />)
            }
        </div>

    )
}

export default HomePage;
