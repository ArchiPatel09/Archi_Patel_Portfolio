import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout'; // Make sure this is default export
import Home from '../pages/Home/Home'; // Make sure these are default exports
import UIFLIX from '../pages/UIFLIX/UIFLIX';
import ServePrime from '../pages/ServePrime/ServePrime';
import DataArena from '../pages/DataArena/DataArena';
import CreativeStudio from '../pages/CreativeStudio/CreativeStudio';
import FoundersCut from '../pages/FoundersCut/FoundersCut';
import './App.css'; // This file exists now
import { ThemeProvider } from '../context/ThemeContext';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="uiflix" element={<UIFLIX />} />
          <Route path="serve-prime" element={<ServePrime />} />
          <Route path="data-arena" element={<DataArena />} />
          <Route path="creative-studio" element={<CreativeStudio />} />
          <Route path="founders-cut" element={<FoundersCut />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Make sure you have default export
export default App;