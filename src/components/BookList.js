import React, {Component} from "react";
import {connect} from "react-redux";
import {selectedBook} from "../actions";

class BookList extends Component {

    renderList() {
        return this.props.books.map( book => {
            return (
                <div className="item" key={book.bookId}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectedBook(book)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{book.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

// function providing state of reducers
// state is going to be results of songsReducer and selectedSongReducer
const mapStateToProps = (state) => {

    return {books: state.books}
}
export default connect(
    // first argument for function connect is mapStateToProps function
    // for getting state of reducers in the object this.props
    mapStateToProps,
    // second argument for function connect is imported actions in the object this.props
    // when we call this imported action creator, the dispatch function invoke it beyond the scene
    // when we click it on Select button
    {selectedBook}
)(BookList);