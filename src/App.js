import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import SearchPage from "./components/SearchPage";
import MyWatchListPage from './components/MyWatchListPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/details/:detailsId" element={<DetailsPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/my-watch-list" element={<MyWatchListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
