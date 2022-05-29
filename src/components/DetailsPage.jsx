import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificMovie } from "../services/movieService"; 

const DetailsPage = ({dispatch, isOnWatchList}) => {
  const { detailsId } = useParams();
  const [movie, setMovie] = useState({});
  const onWatchList = isOnWatchList(+detailsId);
  
  let buttonClassName = '';
  let buttonText = '';
  
  if (onWatchList) {
    buttonClassName = 'remove-to-watchlist';
    buttonText = '- Remove from watch list';
  } else {
    buttonClassName = 'add-to-watchlist';
    buttonText = '+ Add to watch list'
  }

  useEffect(() => {
    getSpecificMovie(detailsId).then(movie => {
      setMovie({...movie, backdrop: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`});
    })
  }, [detailsId]);

  const onWatchListClickHandler = () => {
    dispatch({type: 'toggleWatchListItem', payload: movie});
  }

  return (
    <div className="show-details">
      <img src={movie.backdrop} alt="" />
      <div className="show-details-inner">
        <h1>{movie.name}</h1>
        <div className="description">
          {movie.overview}
        </div>
        <button className={buttonClassName} onClick={onWatchListClickHandler}>{buttonText}</button>
      </div>
    </div>
  );
}
 
export default DetailsPage;