import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificMovie } from "../services/movieService"; 

const DetailsPage = () => {
  const { detailsId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getSpecificMovie(detailsId).then(movie => {
      setMovie({...movie, backdrop: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`});
    })
  }, [detailsId]);

  return (
    <div className="show-details">
      <img src={movie.backdrop} alt="" />
      <div className="show-details-inner">
        <h1>{movie.name}</h1>
        <div className="description">
          {movie.overview}
        </div>
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
  );
}
 
export default DetailsPage;