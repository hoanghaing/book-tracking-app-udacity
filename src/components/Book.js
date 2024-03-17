const Book = (props) => {
  const { item, changeGenre } = props;
  const genres = ['currentlyReading', 'wantToRead', 'read', 'none'];
  const genreTiles = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
    none: 'None'
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    console.log('x: ', item.id);
    console.log('y: ', event.target.value);
    changeGenre(item.id, event.target.value)
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url("${item.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleSelectChange}>
              <option key={`item-option-${item.title}`} value="0">
                Move to...
              </option>
              {genres.map(genre => (
                (
                  <option key={`item-option-${item.title}-${genre}`} value={genre}>
                    {genreTiles[genre]}
                  </option>
                )
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{item.title}</div>
        <div className="book-authors">{item.authors[0]}</div>
      </div>
    </li >
  )
};
export default Book;