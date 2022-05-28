import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import SearchPage from "./components/SearchPage";
import MyWatchListPage from './components/MyWatchListPage';
import { useEffect, useReducer } from "react";
import { watchListReducer } from './reducers/watchListReducer';

function App() {
  const initialState = JSON.parse(localStorage.getItem('WatchListItems'));
  const [watchList, dispatch] = useReducer(watchListReducer, initialState || []);

  useEffect(() => {
    localStorage.setItem('WatchListItems', JSON.stringify(watchList));
  }, [watchList]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage dispatch={dispatch} />} />
          <Route exact path="/details/:detailsId" element={<DetailsPage dispatch={dispatch} />} />
          <Route exact path="/search" element={<SearchPage dispatch={dispatch} />} />
          <Route exact path="/my-watch-list" element={<MyWatchListPage watchList={watchList} dispatch={dispatch} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
