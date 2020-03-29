import React, { Component } from 'react'
import * as bookAPI from '../BooksAPI'
import Book from "./book";

class Search extends Component{
    state = {
        searched_books: []
    }

    onChangeHandler = (e) => {
        const query = e.target.value
        bookAPI.search(query).then((books) => {
            books = books.map((book) => {
                let bookInShelf = this.props.listBooks.find(b => b.id === book.id)
                if(bookInShelf){
                    book.shelf = bookInShelf.shelf;
                }
                return book
            })
            this.setState(
                {
                    searched_books: books
                }
            )
        })
    }

    render() {
        const {onClickHandler, onChangeShelf} = this.props
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={onClickHandler}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" onChange={this.onChangeHandler} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searched_books.length > 0 &&
                        this.state.searched_books.map((book) => (
                                <li key={book.id}>
                                    <Book
                                        bookCoverUrl={book.imageLinks.thumbnail}
                                        bookTitle={book.title}
                                        bookAuthors={book.authors}
                                        bookId={book.id}
                                        currentShelf={book.shelf}
                                        onChangeShelf={onChangeShelf}
                                    />
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search