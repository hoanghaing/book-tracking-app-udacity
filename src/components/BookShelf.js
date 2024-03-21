import PropTypes from 'prop-types';
import BookList from './BookList';
const BookShelf = (props) => {
  const { books, shelf, changeGenre } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title mb-8 font-bold text-2xl text-black-600">{props.title}</h2>
      <BookList key={`booklist-${shelf}`} books={books} shelf={shelf} changeGenre={changeGenre} />
    </div>
  )
}
// eslint-disable-next-line react/no-typos
BookShelf.propTypes = {
  books: PropTypes.array,
  shelf: PropTypes.string,
  changeGenre: PropTypes.func,
}
export default BookShelf;