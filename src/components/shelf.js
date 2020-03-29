import React, { Component } from 'react'
import Book from "./book";

class Shelf extends Component{
    render() {
        const {books, shelf_title, onChangeShelf} = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf_title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
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

export default Shelf