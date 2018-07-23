import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BooksList extends Component{
    renderList(){
        return (
            this.props.books.map((book) => {
                return(
                <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
                );
            })
        );
    }
    render(){
        return(
            <ul className="col-sm-4 list-group">
                {this.renderList()}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

function mapStateToProps(state){
    return(
        {
            books: state.books
        }
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksList);