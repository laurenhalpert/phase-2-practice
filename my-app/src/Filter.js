import React from "react";

function Filter({ setFilterVal }) {
    function handleFilter(e) {
        setFilterVal(e.target.value)
    }
    return (
        <select onChange={handleFilter}>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
        </select>
    )
}

export default Filter