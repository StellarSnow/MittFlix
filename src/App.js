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

  const isOnWatchList = (id) => { console.log('am i here');
    const index = watchList.findIndex(movie => movie.id === id);
    const found = (index >=0 ? true : false);
   
    return found;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage dispatch={dispatch} isOnWatchList={isOnWatchList} />} />
          <Route exact path="/details/:detailsId" element={<DetailsPage dispatch={dispatch} isOnWatchList={isOnWatchList} />} />
          <Route exact path="/search" element={<SearchPage dispatch={dispatch} isOnWatchList={isOnWatchList} />} />
          <Route exact path="/my-watch-list" element={<MyWatchListPage watchList={watchList} dispatch={dispatch} isOnWatchList={isOnWatchList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
