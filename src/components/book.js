import React, { Component } from 'react'
import BookShelfChanger from "./bookShelfChanger";

class Book extends Component{

    render() {
        const {bookCoverUrl, bookTitle, bookAuthors} = this.props
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
                    <BookShelfChanger />
                </div>
                <div className="book-title">Oh, the Places You'll Go!</div>
                <div className="book-authors">Seuss</div>
            </div>
        )
    }
}

export default Book