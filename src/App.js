import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TranslatePage from './pages/translatePage';
import BlogPage from './pages/BlogPage';
import Layout from './layouts/layout';
import TypingPage from './pages/TypingPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/translate" element={<TranslatePage />} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/typeModi" element={<TypingPage/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
