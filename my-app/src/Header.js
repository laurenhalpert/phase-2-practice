import React from "react";
import NavBar from "./NavBar"
import Sort from "./Sort";
import Filter from "./Filter";

function Header({ isSorted, setIsSorted, onSort, setFilterVal }) {
    return(
        <div id="header">
            <h1>Booky</h1>
            <NavBar />
            <Sort isSorted={isSorted} setIsSorted={setIsSorted} onSort={onSort}/>
            <Filter setFilterVal={setFilterVal}/>
        </div>
    )
}

export default Header