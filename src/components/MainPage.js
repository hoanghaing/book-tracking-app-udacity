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
  const updateBookCategory = (itemId, newGenre) => {
    setBooks(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, shelf	: newGenre } : item
      )
    );
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={books} shelf="currentlyReading" changeGenre={updateBookCategory}/>
          <BookShelf title="Want to Read" books={books} shelf="wantToRead" changeGenre={updateBookCategory}/>
          <BookShelf title="Read" books={books} shelf="read" changeGenre={updateBookCategory}/>
        </div>
      </div>
      <SearchTrigger />
    </div>
  )
}

export default MainPage;