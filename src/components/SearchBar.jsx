import { useState } from "react";
import search from "../assets/images/akar-icons_search.svg";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className="searchbar">
               <img src={search} alt="" />
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
            />
         
        </div>

    );
}

export default SearchBar;