import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CSVUploadPage from './pages/CSVUploadPage';
import ProfilePage from './pages/profilePage';
import FeedbackPage from './pages/FeedBackPage';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import StockForecastPage from './pages/StockForecastPage';
import LoginSignupPage from './pages/LoginSignupPage';
import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state
  const [loading, setLoading] = useState(true); // Manage loading state
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // Check for cookie on initial load
  useEffect(() => {
    const authCookie = Cookies.get('isAuthenticated');
    console.log('Auth Cookie:', authCookie); // Debug: Check if the cookie is read correctly
    if (authCookie === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false); // Done checking the cookie
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    Cookies.set('isAuthenticated', true, { expires: 7 }); // Set cookie with 7 days expiration
    console.log('Cookie set on login'); // Debug: Check when cookie is set
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    Cookies.remove('isAuthenticated'); // Remove cookie on logout
    console.log('Cookie removed on logout'); // Debug: Check when cookie is removed
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication
  }

  return (
    <>
      {!isLandingPage && <Navbar onLogout={handleLogout} />} {/* Pass logout handler */}
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
      <Footer />
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
