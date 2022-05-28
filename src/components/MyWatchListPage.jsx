import TitleList from "./TitleList";

const MyWatchListPage = ({ watchList, dispatch }) => {
  return (
    <div className="MainPage">
      <TitleList providerMovies={watchList} title={'My Watch List'} dispatch={dispatch}/> 
    </div>
  );
}
 
export default MyWatchListPage;