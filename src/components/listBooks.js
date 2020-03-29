import React, { Component } from 'react'
import Shelf from "./shelf";

class ListBooks extends Component{
    render() {
        const {books, onClickHandler, onChangeShelf} = this.props

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
                            onChangeShelf={onChangeShelf}
                        />
                        <Shelf
                            shelf_title='Want to Read'
                            books={books.filter((book) => book.shelf === 'wantToRead')}
                            onChangeShelf={onChangeShelf}
                        />
                        <Shelf
                            shelf_title='Read'
                            books={books.filter((book) => book.shelf === 'read')
                            }
                            onChangeShelf={onChangeShelf}
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