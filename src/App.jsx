import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Introduction from './pages/Introduction';
import GettingStarted from './pages/GettingStarted';
import Installation from './pages/Installation';
import Configuration from './pages/Configuration';
import Tutorial from './pages/Tutorial';
import UserGuide from './pages/UserGuide';
import ConceptualGuide from './pages/ConceptualGuide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="installation" element={<Installation />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="user-guide" element={<UserGuide />} />
          <Route path="conceptual-guide" element={<ConceptualGuide />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
               