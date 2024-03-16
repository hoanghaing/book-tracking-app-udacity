
import Book from './Book';
const BookList = (props) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
      </ol>
    </div>
  )
};
export default BookList;