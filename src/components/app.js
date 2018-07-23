import React, { Component } from 'react';
import BooksList from '../containers/book_list';
import BookDetails from '../containers/bookdetails';
export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList />
        <BookDetails />
      </div>
    );
  }
}
