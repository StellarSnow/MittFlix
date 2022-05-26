import TitleList from "./TitleList";

const MainPage = ({allMovies}) => {
  const providerNames = ['Netflix', 'Crave', 'Disney', 'Apple Plus'];

  return (
    <div className="MainPage">  
      {allMovies.map((providerMovies, index) =>  
        <TitleList providerMovies={providerMovies} title={providerNames[index]}/> 
      )}
    </div>
  );
}
 
export default MainPage;