import { useState, useEffect } from "react";
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
const Searchpage = (props) => {
  const { currentIds, setBooks } = props;
  const [searchResults, setSearchResults] = useState([]);
  const useThrottledCallback = (callback, delay) => {
    const [timeoutId, setTimeoutId] = useState(null);
    const throttledCallback = (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const id = setTimeout(() => {
        callback(...args);
        setTimeoutId(null);
      }, delay);
      setTimeoutId(id);
    };
    return throttledCallback;
  }
  const handleChangeThrottled = useThrottledCallback((event) => {
    if (!event.target.value) {
      setSearchResults([]);
      return;
    }
    BooksAPI.search(event.target.value, 20).then((result) => {
      setSearchResults(result);
    });
  }, 500);
  const addBookToMyList = (itemId, newGenre) => {
    setBooks(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, shelf: newGenre } : item
      )
    );
  };
  const updateBookCategory = (itemId, newGenre) => {
    setBooks(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, shelf: newGenre } : item
      )
    );
  }; 
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          href="/"
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChangeThrottled}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((item, index) => (
            <Book
              key={`book-${index}`}
              id={item.id}
              img={item.imageLinks.thumbnail}
              title={item.title}
              author={item.authors[0]}
              genre={item.shelf}
              changeGenre={() => {console.log("Ahihi")}}
            />
          ))}
        </ol>
      </div>
    </div>
  )
};
export default Searchpage