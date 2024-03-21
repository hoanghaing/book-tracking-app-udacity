import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
const Book = (props) => {
  const location = useLocation();
  const { item, currentIds = [], changeGenre, shelfIds = {} } = props;
  const fullGenres = ['currentlyReading', 'wantToRead', 'read'];
  const genreTiles = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read',
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
              <option key={`item-option-${item.title}-default`} value="0"> {
                (!currentIds.includes(item.id) && location.pathname.includes('search')) ? 'Add to...' : 'Move to...'
              }
              </option>
              {
                fullGenres.map(genre => (
                  (
                    <option key={`item-option-${item.title}-${genre}`} value={genre}>
                      {
                        item.shelf === genre || shelfIds[genre]?.includes(item.id) ?
                          `* ${genreTiles[genre]}` :
                          genreTiles[genre]
                      }
                    </option>
                  )
                ))
              }
              <option key={`item-option-${item.title}-none`} value='none'>
                {
                  (!currentIds.includes(item.id) && location.pathname.includes('search'))
                    ?
                    '* None' :
                    `None`
                }
              </option>
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
Book.propTypes = {
  item: PropTypes.object,
  currentIds: PropTypes.array,
  shelfIds: PropTypes.object,
  changeGenre: PropTypes.func,
}
export default Book;