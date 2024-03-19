import PropTypes from 'prop-types';
import { useLocation  } from "react-router-dom";
const Book = (props) => {
  const location = useLocation();
  const { item, currentIds, changeGenre } = props;
  const genres = ['currentlyReading', 'wantToRead', 'read', 'none'];
  const genreTiles = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
    none: 'None'
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    changeGenre(item, event.target.value)
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
                `url("${item?.imageLinks?.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleSelectChange}>
              <option key={`item-option-${item.title}`} value="0"> {
                (!currentIds.includes(item.id) && location.pathname.includes('search')) ? 'Add to...' : 'Move to...'
              }
              </option>
              {genres.map(genre => (
                 
                (
                  <option key={`item-option-${item.title}-${genre}`} value={genre}>
                    {
                      item.shelf === genre ? 
                      `* ${genreTiles[genre]}` :
                      genreTiles[genre]
                    }
                  </option>
                )
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{item.title ? item.title : ''}</div>
        <div className="book-authors">{item.authors ? item.authors[0] : ''}</div>
      </div>
    </li >
  )
};
// eslint-disable-next-line react/no-typos
Book.PropTypes = {
  item: PropTypes.object,
  currentIds: PropTypes.array,
  changeGenre: PropTypes.func,
}
export default Book;