import Movie from "./Movie";

const TitleList = ({providerMovies, title}) => {  
  return (
    <div className="titleList">
      <div className="title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {providerMovies.map(providerMovie =>  <Movie providerMovie={providerMovie} /> )}      
        </div>
      </div>
    </div>
  );
}
 
export default TitleList;