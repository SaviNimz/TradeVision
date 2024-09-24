/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import CSVUploadPage from './pages/CSVUploadPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import FeedbackPage from './pages/FeedBackPage.jsx';
import Navbar from './components/navbar.jsx';
import LandingPage from './pages/LandingPage';
import StockForecastPage from './pages/StockForecastPage.jsx';
import LoginSignupPage from './pages/LoginSignupPage.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignupPage onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/forecast"
          element={isAuthenticated ? <StockForecastPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/feedback"
          element={isAuthenticated ? <FeedbackPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/CsvUpload"
          element={isAuthenticated ? <CSVUploadPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;
