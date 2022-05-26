import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { getMovies } from "./services/movieService"; 
import { useEffect, useState } from "react";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {getMovies().then(movies => {setAllMovies(movies)})}, []);

  return (
    <div className="App">
      <Header />
      <MainPage allMovies={allMovies} />
    </div>
  );
}

export default App;
