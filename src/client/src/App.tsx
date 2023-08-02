import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ArtworksPage from './pages/ArtworksPage';
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
import TransactionPage from './pages/Transaction/TransactionPage';
import SuccessfulTransactionPage from './pages/Transaction/SuccessfulTransactionPage';
import ErrorPage from './pages/Error/ErrorPage';
import MessagePage from './pages/MessagePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCreatedPage from './pages/UserCreatedPage';

import TestingPage from './pages/TestingPageMongo';
import TestingPageNeo from './pages/TestingPageNeo'

import { ShoppingCartProvider } from './context/ShoppingCartContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
      <div>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artworks" element={<ArtworksPage />} />

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
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/transaction" element={<TransactionPage />} />
              <Route path="/checkout-success" element = {<SuccessfulTransactionPage/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/testing" element={<TestingPage />} />
              <Route path="/testing2" element={<TestingPageNeo />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/message" element={<MessagePage />} />
              <Route path="/successful" element={<UserCreatedPage />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </div>
  );
}

export default App;