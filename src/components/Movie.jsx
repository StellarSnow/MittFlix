import { Link } from 'react-router-dom';

const Movie = ({providerMovie, dispatch, isOnWatchList}) => {  
  const {id, poster_path, name, vote_average, overview} = providerMovie;
  const posterPath = poster_path === null ?
    '/images/image-not-available.jpg' :
    `https://image.tmdb.org/t/p/w500${poster_path}`

  const detailsLink = `/details/${id}`;

  const onWatchListClickHandler = () => {
    dispatch({type: 'toggleWatchListItem', payload: providerMovie});
  }

  return (
    <div class="movie" key={id} id={id}>
      <Link to={detailsLink}>
        <img src={posterPath} alt="Movie poster" />
        <div class="overlay">
          <div class="title">{name}</div>
          <div class="rating">{vote_average}/10</div>
          <div class="plot">
            {overview}
          </div>
        </div>
      </Link>
      <div data-toggled={isOnWatchList(id)} class="listToggle" onClick={onWatchListClickHandler}>
        <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
      </div>
    </div>
  );
}
 
export default Movie;