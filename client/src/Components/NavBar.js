import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = (props) =>
    <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">E Market </div>
        <div className="NavBar-linkContainer u-inlineBlock">
            <Link to="/" className="">
                <i className="fas fa-home" />
                Home
            </Link>
            <Link to="/cart" className="">
                <i className="fas fa-shopping-cart" />
                <span>
                    Cart {}
                </span>
            </Link>
        </div>
    </nav>
export default NavBar;

