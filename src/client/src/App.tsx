import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import BiddingPage from './pages//Bidding/BiddingPage';
import DiscoverPage from './pages/DiscoverPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import TrendingPage from './pages/Discover/TrendingPage';
import DealsPage from './pages/Discover/DealsPage';
import BeatsPage from './pages/Discover/BeatsPage';
import SceneryPage from './pages/Discover/SceneryPage';
import DigitalPage from './pages/Discover/DigitalPage';
import NewPage from './pages/Discover/NewPage';
import ClassicalPage from './pages/Discover/ClassicalPage';
import PortraitPage from './pages/Discover/PortraitPage';
import BiddingPurchasePage from './pages/Bidding/BiddingPurchasePage';
import ErrorPage from './pages/Error/ErrorPage';
import MessagePage from './pages/MessagePage';

import TestingPage from './pages/TestingPage';
import TestingPage2 from './pages/TestingPage2'

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
        <Route path="/bidding/purchase" element={<BiddingPurchasePage />} />

        <Route path="/discover" element={<DiscoverPage />} />

        <Route path="/discover/trending" element={<TrendingPage />} />
        <Route path="/discover/deals" element={<DealsPage />} />
        <Route path="/discover/beats" element={<BeatsPage />} />
        <Route path="/discover/scenery" element={<SceneryPage />} />
        <Route path="/discover/new" element={<NewPage />} />
        <Route path="/discover/digital" element={<DigitalPage />} />
        <Route path="/discover/classical" element={<ClassicalPage />} />
        <Route path="/discover/portraits" element={<DealsPage />} />

        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/testing2" element={<TestingPage2 />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/message" element={<MessagePage />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;