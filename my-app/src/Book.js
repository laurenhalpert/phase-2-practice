import React from "react";

function Book({ book }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{book.genre}</h4>
        </div>
    )
}

export default Book