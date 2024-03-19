import BookList from './BookList';
const BookShelf = (props) => {
  const { books, shelf, changeGenre } = props;
  return (
    <div className="bookshelf">
      <h2 className="mb-8 font-bold text-2xl text-black-600">{props.title}</h2>
      <BookList books={books} shelf={shelf} changeGenre={changeGenre} />
    </div>
  )
}

export default BookShelf;