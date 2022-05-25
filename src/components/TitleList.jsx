import Movie from "./Movie";

const TitleList = () => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Netflix</h1>
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