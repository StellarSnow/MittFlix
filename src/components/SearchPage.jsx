import TitleList from "./TitleList";
import { useState, useEffect } from "react";
import { searchForMovies } from "../services/movieService";

const SearchPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {searchForMovies('Star Wars').then(movies => {setSearchedMovies(movies)})}, []);

  return (
    <div className="MainPage">
      <TitleList providerMovies={searchedMovies} title={'Results'}/> 
    </div>
  );
}
 
export default SearchPage;