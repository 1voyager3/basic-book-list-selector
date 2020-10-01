import React from "react";
import 'semantic-ui-css/semantic.min.css'
import BookList from './BookList';
import BookDetail from './BookDetail'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <BookList />
                </div>
                <div className="column eight wide">
                    <BookDetail />
                </div>
            </div>

        </div>
    )
}

export default App;