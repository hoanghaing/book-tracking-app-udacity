import PropTypes from 'prop-types';
import Book from './Book';
const BookList = (props) => {
  const { books, shelf, changeGenre } = props;
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((item, index) => (
          item.shelf === shelf ?
            <Book
              key={`book-${index}`}
              item={item}
              currentIds={[]}
              changeGenre={changeGenre}
            /> : <></>
        ))}
      </ol>
    </div>
  )
};
// eslint-disable-next-line react/no-typos
BookList.PropTypes = {
  books: PropTypes.array,
  shelf: PropTypes.string,
  changeGenre: PropTypes.func,
}
export default BookList;