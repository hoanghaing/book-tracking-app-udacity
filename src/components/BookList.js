
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
export default BookList;