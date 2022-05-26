import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const onSearchChangeHandler = (event) => {
    setSearchText(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <header className="header">
      <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li><a href="/my-watch-list">Watch List</a></li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={onSubmitHandler}>
        <input type="search" placeholder="Search for a title..." onChange={onSearchChangeHandler} value={searchText} />
        <div className="searchResults"></div>
      </form>
    </header>
  );
}
 
export default Header;