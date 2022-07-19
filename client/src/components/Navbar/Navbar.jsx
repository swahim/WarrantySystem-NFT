import "./navbar.css";
import logoImage from "../../assets/logo.png";
import cartIcon from "../../assets/cart.svg";
import searchIcon from "../../assets/search.svg";
const Navbar = () => {
    return (
        <div className="mainContainer">
            <div className="logoImageContainer">
                <img src={logoImage} alt="logo" />
            </div>
            <div className="navbarMenuOptions">
                <div style={{cursor: 'pointer'}}>Home</div>
                <div style={{cursor: 'pointer'}}>Shop</div>
                <div style={{cursor: 'pointer'}}>About</div>
                <div style={{cursor: 'pointer'}}>Contact</div>
            </div>
            <div className="rightLogoContainer">
                <div className="rightLogos cartLogo">
                    <img src={cartIcon} alt="cart" />
                </div>
                <div className="rightLogos cartLogo">
                    <img src={searchIcon} alt="search" />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;