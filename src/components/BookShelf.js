import BookList from './BookList';
const BookShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <BookList />
    </div>
  )
}

export default BookShelf;