import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import BookList from "./BookList"

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Apples Never Fall",
      author: "Liane Moriarty",
      genre: "mystery"
    },
    {
      id: 2,
      title: "Verity",
      author: "Colleen Hoover",
      genre: "mystery"
    },
    {
      id: 3,
      title: "Crescent City",
      author: "Sarah J. Maas",
      genre: "fantasy"
    }
  ])
  const [isSorted, setIsSorted] = useState(false)
  const [filterVal, setFilterVal] =useState("")
  

function handleSort(sortVal){
  let sortedBookArr
  if (sortVal === "title") {
    sortedBookArr = books.sort((a,b)=> a.title>b.title? 1:-1)
  } else if (sortVal ==="author") {
    sortedBookArr = books.sort((a,b)=> a.author>b.author? 1:-1)
  }
  setBooks(sortedBookArr)
}
const booksToDisplay = books.filter(book => filterVal === ""? true: book.genre === filterVal)

  return (
    <div className="App">
      <Header isSorted={isSorted} setIsSorted={setIsSorted} onSort={handleSort} setFilterVal={setFilterVal}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <BookList books={booksToDisplay}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
