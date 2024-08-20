import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignupPage from './pages/loginSignupPage';
import Dashboard from './pages/dashboard';
import ForecastPage from './pages/forecastPage';
import ProfilePage from './pages/profilePage';
import FeedbackPage from './pages/feedBackPage';
import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
