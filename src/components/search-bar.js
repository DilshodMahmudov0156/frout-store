import React from 'react';

function SearchBar({}) {
    return (
        <div className="container search-bar-container">
            <div className="search-bar-in">
                <input type="search"/>
                <button className="searching-btn">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;