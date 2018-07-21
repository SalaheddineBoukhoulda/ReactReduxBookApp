import React,{Component} from 'react';

export default class BooksList extends Component{
    renderList(){
        return (
            this.props.books.map((book) => {
                return <li key={book.title} className="list-group-item">{book.title}</li>
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