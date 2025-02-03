import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;