import "./App.css";
import { useState, useEffect } from "react";
import BookShelf from './components/BookShelf';
import SearchTrigger from './components/SearchTrigger';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI';
function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);
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
    <div className="app">
      {showSearchPage ? (
        <Search onClick={() => setShowSearchpage(!showSearchPage)} />
      ) : (
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
          <SearchTrigger onClick={() => setShowSearchpage(!showSearchPage)} />
        </div>
      )}
    </div>
  );
}

export default App;