import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import TypingPage from './pages/TypingPage';
import TranslatePage from './pages/translatePage';
import Canvas from './pages/canvas';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/translate" element={<TranslatePage />} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/typeModi" element={<TypingPage/>} />
          <Route path="/canvas" element={<Canvas/>} />
          {/* <Route path="/chatbot" element={<ChatBot/>} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
