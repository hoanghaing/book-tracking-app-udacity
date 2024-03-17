import "./App.css";
import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState([]);
  useEffect(() => {
    // Perform API call or any other side effects here
    fetchData();
    return () => {};
  }, []);
  const fetchData = () => {
    // Perform your API call here
    BooksAPI.getAll().then(list => {
      setBooks(list);
      const currentIds = list.map((item) => item.id)
      setIds(currentIds);
    });
  };
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage setIds={setIds} books={books} setBooks={setBooks} />} />
          <Route path="/search" element={<SearchPage currentIds={ids} books={books} setBooks={setBooks} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;