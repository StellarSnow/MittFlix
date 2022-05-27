import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const onSearchChangeHandler = (event) => {
    const search = event.target.value.trimStart();
    
    setSearchText(search);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    location.pathname = '/search?query=';
    location.search = searchText;
    
    navigate(location.pathname + location.search);
  }

  return (
    <header className="header">
      <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li><Link to="/my-watch-list">Watch List</Link></li>
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