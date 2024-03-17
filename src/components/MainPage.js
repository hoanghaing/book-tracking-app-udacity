import { useState, useEffect } from "react";
import BookShelf from './BookShelf';
import SearchTrigger from './SearchTrigger';
import * as BooksAPI from '../BooksAPI';

const MainPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Perform API call or any other side effects here
    fetchData();
  }, []);
  const fetchData = () => {
    // Perform your API call here
    BooksAPI.getAll().then(list => {
      setBooks(list);
    });
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={books} shelf="currentlyReading" />
          <BookShelf title="Want to Read" books={books} shelf="wantToRead" />
          <BookShelf title="Read" books={books} shelf="read" />
        </div>
      </div>
      <SearchTrigger />
    </div>
  )
}

export default MainPage;