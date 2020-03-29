import React from 'react'
import './App.css'
import * as BookAPI from './BooksAPI'
import { Route } from "react-router-dom";
import ListBooks from "./components/listBooks";
import Search from "./components/search";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BookAPI.getAll().then((books) =>{
      this.setState(() => ({
        books: books
      }))
    })
  }

  handleChangeShelf = (book_id, new_shelf) => {
      const updated_book = this.state.books.find(b => b.id === book_id)

      if(updated_book){
          this.setState((prevState) => (
              {
                books: prevState.books.map(book => {
                    if(book.id === book_id){
                        book.shelf = new_shelf;
                    }
                    return book
                })
              }
          ))
          BookAPI.update(updated_book, new_shelf)
      }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({history}) => (
            <Search
                onClickHandler={() => (history.push('/'))}
                onChangeShelf = {this.handleChangeShelf}
            />
        )}/>
        <Route exact path='/' render={({history})=>(
            <ListBooks
                books={this.state.books}
                onClickHandler={() => (history.push('/search'))}
                onChangeShelf = {this.handleChangeShelf}
            />
        )} />

      </div>
    )
  }
}

export default BooksApp
