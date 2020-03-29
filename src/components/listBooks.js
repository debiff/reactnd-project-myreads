import React, { Component } from 'react'
import Shelf from "./shelf";

class ListBooks extends Component{
    render() {
        const {books, onClickHandler} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            shelf_title='Currently Reading'
                            books={books.filter((book) => book.shelf === 'currentlyReading')}
                        />
                        <Shelf
                            shelf_title='Want to Read'
                            books={books.filter((book) => book.shelf === 'wantToRead')}
                        />
                        <Shelf
                            shelf_title='Read'
                            books={books.filter((book) => book.shelf === 'read')}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={onClickHandler}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default ListBooks