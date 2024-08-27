import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CSVUploadPage from './pages/CSVUploadPage';
import ProfilePage from './pages/profilePage';
import FeedbackPage from './pages/FeedBackPage';
import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';
import StockForecastPage from './pages/StockForecastPage';
import LoginSignupPage from './pages/LoginSignupPage';

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
