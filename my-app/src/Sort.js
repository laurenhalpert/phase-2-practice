import React from "react";

function Sort({ isSorted, setIsSorted, onSort }) {
    function handleSort(e) {
        setIsSorted(()=> !isSorted)
        onSort(e.target.value)
    }
    return(
        <select onChange={handleSort}>
            <option value="title">Title A-Z</option>
            <option value="author">Author A-Z</option>
        </select>
    )
}

export default Sort