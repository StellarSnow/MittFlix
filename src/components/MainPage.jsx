import TitleList from "./TitleList";
import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService"; 

const MainPage = ({dispatch, isOnWatchList}) => {
  const providerNames = ['Netflix', 'Crave', 'Disney', 'Apple Plus'];
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => { getMovies().then((movies) => 
    setAllMovies(movies))
  }, [])

  return (
    <div className="MainPage">  
      {allMovies.map((providerMovies, index) =>  
        <TitleList providerMovies={providerMovies} title={providerNames[index]} dispatch={dispatch} isOnWatchList={isOnWatchList} /> 
      )}
    </div>
  );
}
 
export default MainPage;