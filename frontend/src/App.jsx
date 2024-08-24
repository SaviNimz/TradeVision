import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import CSVUploadPage from './pages/CSVUploadPage';
import ProfilePage from './pages/profilePage';
import FeedbackPage from './pages/feedBackPage';
import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';
import StockForecastPage from './pages/StockForecastPage';
import LoginSignupPage from './pages/LoginSignupPage';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forecast" element={<StockForecastPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path='/CsvUpload' element={<CSVUploadPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
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
