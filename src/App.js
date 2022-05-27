import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { getMovies } from "./services/movieService"; 
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import SearchPage from "./components/SearchPage";
import MyWatchListPage from './components/MyWatchListPage';

function App() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {getMovies().then(movies => {setAllMovies(movies)})}, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage allMovies={allMovies} />} />
          <Route exact path="/details/:detailsId" element={<DetailsPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/my-watch-list" element={<MyWatchListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
