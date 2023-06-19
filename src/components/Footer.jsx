import { Link } from "react-router-dom";
import tabler from "../assets/images/tabler_window.svg";
const Footer = () => {
    return ( 
        <footer id="contact">
            <div className="inner-contact">
                <div className="content">
                    <h1>Libraries & Plugins</h1>
                  <div className="link">
                    <Link>SDKs</Link>
                    <Link>WHMCS Plugin</Link>
                    <Link>WordPress Plugin</Link>
                  </div>
                </div>
                <div className="content">
                    <h1>Community</h1>
                   <div className="link tabler">
                    <Link>Facebook <img src={tabler} alt="" /></Link>
                    <Link>Developer Forums <img src={tabler} alt="" /></Link>
                    <Link>Twitter <img src={tabler} alt="" /></Link>
                   </div>
                </div>
                <div className="content">
                    <h1>More</h1>
                   <div className="link">
                    <Link>Blog</Link>
                    <Link>Docs</Link>
                    <Link>About Us</Link>
                    <Link>Terms of Service</Link>
                    <Link>Privacy Policy</Link>
                   </div>
                </div>
            </div>
            <p>Copyright © 2022 Resellme.</p>
        </footer>
     );
}
 
export default Footer;