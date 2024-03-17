const SearchTrigger = (props) => {
  return (
    <div className="open-search">
      <a
        href="/#"
        onClick={props.onClick}
      >
        Add a book
      </a>
    </div>
  )
}
export default SearchTrigger;