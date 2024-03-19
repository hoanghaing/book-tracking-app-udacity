import { useState } from "react";
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';
const Searchpage = (props) => {
  const { currentIds } = props;
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
    if (!event.target.value || event.target.value.trim().length === 0) {
      setSearchResults([]);
      return;
    }
    BooksAPI.search(event.target.value, 20).then((result) => {
      if (result.length) setSearchResults(result);
    });
  }, 300);
  const addBookToMyList = (book, newGenre) => {
    BooksAPI.update(book, newGenre);
  };
  const updateBookCategory = (book, newGenre) => {
    BooksAPI.update(book, newGenre);
  };
  const handleChangeGenre = (item, newGenre) => {
    if (currentIds.includes(item.id)) {
      updateBookCategory(item, newGenre);
    } else {
      addBookToMyList(item, newGenre);
    }
  }
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
              item={item}
              currentIds={currentIds}
              changeGenre={handleChangeGenre}
            />
          ))}
        </ol>
      </div>
    </div>
  )
};
// eslint-disable-next-line react/no-typos
Searchpage.PropTypes = {
  currentIds: PropTypes.array
}
export default Searchpage