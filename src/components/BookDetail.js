import React from "react";
import {connect} from "react-redux";

const BookDetail = ({book}) => {

    // if book === null
    if (!book) {
        return <div>Select a book</div>
    }

    return (
        <div className="ui container">
            <h5>Details for:</h5>
            <img src={book.bookCover} alt={book.title} style={{width: '100px'}}/>
            <br/>
            Title: <span><h3> {book.title}</h3></span>
            <br/>
            Author: <i>{book.author}</i>
            <p style={{marginTop: '10px'}}>
             Description: <br/> {book.description}
            </p>
        </div>
    )
}

const MapStateToProps = (state) => {
     return {book: state.selectedBook}
}

export default connect(
    MapStateToProps
)(BookDetail);