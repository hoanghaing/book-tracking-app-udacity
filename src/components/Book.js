const Book = (props) => {
  const { img, title, author, genre } = props
  const genres = ['currentlyReading', 'wantToRead', 'read', 'none'];
  const genreTiles = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
    none: 'None'
  }
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
                `url("${img}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              {genres.map(item => (
                item === genre ? <></>
                  : (
                    <option key={item} value={item}>
                      {genreTiles[item]}
                    </option>
                  )
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  )
};
export default Book;