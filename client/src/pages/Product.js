import {Link} from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    return (
        <>
            <div className="product">
                <img src={props.imageUrl} alt="商品不可见" />
                <div className="product_info">
                    <p className="info_name">{props.name}</p>
                    <p className="info_description">{props.description}</p>
                </div>
                <p>Price: ${props.price}</p>
                <Link to={`/product/${props.id}`} className="info_button" >
                    Detail
                </Link>
            </div>
        </>
    )
}

export default Product;
