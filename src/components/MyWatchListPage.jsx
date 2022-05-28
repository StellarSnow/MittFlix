import TitleList from "./TitleList";

const MyWatchListPage = ({ watchList, dispatch, isOnWatchList }) => {
  return (
    <div className="MainPage">
      <TitleList providerMovies={watchList} title={'My Watch List'} dispatch={dispatch} isOnWatchList={isOnWatchList} /> 
    </div>
  );
}
 
export default MyWatchListPage;