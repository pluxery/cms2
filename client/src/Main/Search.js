import React from "react";
import "./Main.css"
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return(
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__icon"/>
                <input placeholder="Поиск" type="text"/>
            </div>
        </div>
    )
}

export default Search;