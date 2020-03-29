import React from 'react'
import './App.css'
import * as BookAPI from './BooksAPI'
import { Route } from "react-router-dom";
import ListBooks from "./components/listBooks";

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

  handleChangeShelf = (book_id, new_state) => {
      this.setState((prevState) => (
          {
            books: prevState.books.map(book => {
                if(book.id === book_id){
                    book.state = new_state;
                }
                return book
            })
          }
      ))
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                <div className="search-books-input-wrapper">
                  {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                  <input type="text" placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
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
