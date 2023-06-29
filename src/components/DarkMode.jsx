import { useState } from "react";
import sun from "../assets/images/sun.svg";

const DarkMode = () => {
 const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
    document.querySelector("body").setAttribute("data-theme", darkMode ? "dark" : "light");
 }
    
    return ( 
        <div className="dark_mode">
            <img src={sun} alt="" className="sun"   onClick={toggleDarkMode}/>
        </div>
     );
}
 
export default DarkMode;