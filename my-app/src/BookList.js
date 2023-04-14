import React from "react";
import Book from "./Book";

function BookList ({ books }) {
    return (
        <div>
            {books.map(book=>{
                return(
                    <Book key={book.id} book={book} />
                )
            })}
        </div>
    )
}

export default BookList