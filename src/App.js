import "./App.css";
import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState([]);
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