const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search Song library</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search Song library"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
