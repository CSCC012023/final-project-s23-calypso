import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import BiddingPage from './pages/BiddingPage';
import DiscoverPage from './pages/DiscoverPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import TrendingPage from './pages/Discover/TrendingPage';
import TestingPage from './pages/TestingPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/discover/trending" element={<TrendingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/testing" element={<TestingPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;