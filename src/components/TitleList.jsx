import Movie from "./Movie";

const TitleList = ({providerName}) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{providerName}</h1>
        <div className="titles-wrapper">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    </div>
  );
}
 
export default TitleList;