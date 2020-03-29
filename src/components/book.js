import React, { Component } from 'react'
import BookShelfChanger from "./bookShelfChanger";

class Book extends Component{

    render() {
        const {
            bookCoverUrl,
            bookTitle,
            bookAuthors,
            bookId,
            currentShelf,
            onChangeShelf} = this.props
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128,
                             height: 174,
                             backgroundImage: `url(${bookCoverUrl}`
                         }}
                    />
                    <BookShelfChanger
                        currentShelf={currentShelf}
                        bookId={bookId}
                        onChangeShelf={onChangeShelf}
                    />
                </div>
                <div className="book-title">{bookTitle}</div>
                {   bookAuthors &&
                    <div className="book-authors">{bookAuthors.map(author => {
                        return(author + ', ')
                    })}
                    </div>
                }
            </div>
        )
    }
}

export default Book