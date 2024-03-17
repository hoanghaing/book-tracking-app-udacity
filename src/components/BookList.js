
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
              changeGenre={changeGenre}
            /> : <></>
        ))}
      </ol>
    </div>
  )
};
export default BookList;
// id={item.id}
// img={item.imageLinks.thumbnail}
// title={item.title}
// author={item.authors[0]}
// genre={item.shelf}