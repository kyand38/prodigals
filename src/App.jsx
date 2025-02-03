import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;