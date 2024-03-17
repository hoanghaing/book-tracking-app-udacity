import BookList from './BookList';
const BookShelf = (props) => {
  const { books, shelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <BookList books={books} shelf={shelf} changeGenre={props.changeGenre}/>
    </div>
  )
}

export default BookShelf;