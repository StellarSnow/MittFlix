import TitleList from "./TitleList";

const MainPage = () => {
  const providerNames = ['Netflix', 'Crave', 'Disney', 'Apple Plus'];

  return (
    <div className="MainPage">
      {providerNames.map(providerName => <TitleList providerName={providerName} /> )}     
    </div>
  );
}
 
export default MainPage;