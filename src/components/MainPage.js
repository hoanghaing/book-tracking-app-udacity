import BookShelf from './BookShelf';
import SearchTrigger from './SearchTrigger';
import * as BooksAPI from '../BooksAPI';

const MainPage = (props) => {
  const { setBooks, books } = props
  const updateBookCategory = (book, newGenre) => {
    const newBooks = books.map(item => item.id === book.id ? { ...item, shelf: newGenre } : item);
    setBooks(newBooks);
    BooksAPI.update(book, newGenre);
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf title="Currently Reading" books={books} shelf="currentlyReading" changeGenre={updateBookCategory} />
          <BookShelf title="Want to Read" books={books} shelf="wantToRead" changeGenre={updateBookCategory} />
          <BookShelf title="Read" books={books} shelf="read" changeGenre={updateBookCategory} />
        </div>
      </div>
      <SearchTrigger />
    </div>
  )
}

export default MainPage;