import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/resellme-logo.svg";
import tabler from "../assets/images/tabler_window.svg";
import sun from "../assets/images/sun.svg";
import search from "../assets/images/akar-icons_search.svg";
import hero from "../assets/images/hero-bg.png";

const Navbar = () => {
    
    return (
        <nav>
            <div className="image">
                <img src={hero} alt="hero image" />
                <div className="overlay"></div>
            </div>

            <div className="navbar">
            <Link to='/'><img src={logo} alt="resellme logo" className='logo' /></Link>
                <div className="nav-content">
                    <ul className="menu">
                       
                        <li className="menu-item"><NavLink to="/Docs">Docs</NavLink></li>
                        <li className="menu-item"><NavLink to="/Blog">Blog</NavLink></li>
                        <li className="menu-item"><NavLink to="/About">About Us</NavLink></li>
                    </ul>
              
                    <ul className="menu">
                        <li className="menu-itemone"><NavLink to="/Docs">Support</NavLink><img src={tabler} alt="" /></li>
                        <li className="menu-itemone"><NavLink to="/Docs">Portal</NavLink><img src={tabler} alt="" /></li>
                        <li className="menu-itemone"><NavLink to="/Blog">Register</NavLink><img src={tabler} alt="" /></li>
                        <li className="menu-itemone"><Link to="/Blog"><img src={sun} alt="light mode" /></Link></li>
                        <button> <img src={search} alt="" /><Link>Search</Link></button>
                    </ul>
                </div>
            </div>

            <div className="menu-icon">
                <h1>Menu</h1>
                <div className="hamburger">
                    <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>  
                </div>
              
            </div>
        </nav>

    );
}

export default Navbar;