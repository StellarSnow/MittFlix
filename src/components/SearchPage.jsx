import TitleList from "./TitleList";
import { useState, useEffect } from "react";
import { searchForMovies } from "../services/movieService";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const location = useLocation();
  const searchText = (location.search).split('=')[1];

  useEffect(() => {searchForMovies(searchText).then(movies => {setSearchedMovies(movies)})}, [searchText]);

  return (
    <div className="MainPage">
      <TitleList providerMovies={searchedMovies} title={'Results'}/> 
    </div>
  );
}
 
export default SearchPage;