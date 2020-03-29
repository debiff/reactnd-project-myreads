import React, {Component} from 'react'

class BookShelfChanger extends Component{

    onChangeHandler= (e) =>{
        const new_state = e.target.value;

        this.props.onChangeShelf(this.props.bookId, new_state)
    }
    render() {
        const {currentShelf} = this.props

        return(
            <div className="book-shelf-changer">
                <select value={currentShelf} onChange={this.onChangeHandler}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default BookShelfChanger