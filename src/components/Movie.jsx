const Movie = ({providerMovie}) => {  
  const {id, poster_path, original_name, vote_average, overview} = providerMovie;
  const posterPath = poster_path === null ?
    '/images/image-not-available.jpg' :
    `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <div class="movie" key={id} id={id}>
      <a href="/details/60735">
        <img src={posterPath} alt="Movie poster" />
        <div class="overlay">
          <div class="title">{original_name}</div>
          <div class="rating">{vote_average}/10</div>
          <div class="plot">
            {overview}
          </div>
        </div>
      </a>
      <div data-toggled="false" class="listToggle">
        <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
      </div>
    </div>
  );
}
 
export default Movie;