import { useState } from "react";
import sun from "../assets/images/sun.svg";
import moon from "../assets/images/Icon awesome-moon.png"

const DarkMode = () => {
 const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
    document.querySelector("body").setAttribute("data-theme", darkMode ? "dark" : "light");
 }
    
    return ( 
        <div className="dark_mode">
            <img src={darkMode ? sun : moon} alt="" className="sun"   onClick={toggleDarkMode}/>
        </div>
     );
}
 
export default DarkMode;