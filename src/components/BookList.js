
import Book from './Book';
const BookList = (props) => {
  const { books, shelf } = props;
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((item, index) => (
          item.shelf === shelf ?
            <Book
              key={index}
              img={item.imageLinks.thumbnail}
              title={item.title}
              author={item.authors[0]}
              genre={item.shelf}
            /> : ''
        ))}
      </ol>
    </div>
  )
};
export default BookList;