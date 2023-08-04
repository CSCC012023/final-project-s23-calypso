import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ArtworksPage from './pages/ArtworksPage';
import BiddingPage from './pages//Bidding/BiddingPage';
import DiscoverPage from './pages/DiscoverPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import LoginPageUpdate from './pages/LoginPage2';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import RegisterPageUpdate from './pages/RegisterPage2';
import TrendingPage from './pages/TrendingPage';
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
import MessageSearch from './pages/MessageSearch';
import UpdatedMessagePage from './pages/MessagePage2'
import Landing2 from './pages/Landing2';
import SellerDashboardPage from './pages/SellerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import UserCreatedPage from './pages/UserCreatedPage';
import '@coreui/coreui/dist/css/coreui.min.css'
import './tailwind.css'


import TestingPage from './pages/TestingPageMongo';
import TestingPageNeo from './pages/TestingPageNeo'

import { ShoppingCartProvider } from './context/ShoppingCartContext';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
      <div>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Routes>
              
              <Route path="/" element={<Navigate to="/landing"/>}/>
              <Route path="/home" element={<HomePage />} /> 
              <Route path="/artworks" element={<ArtworksPage />} />

              <Route path="/bidding/:id" element={<BiddingPage />} />
              <Route path="/bidding/purchase/:id" element={<BiddingPurchasePage />} />

              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/discover/trending" element={<TrendingPage />} />
              <Route path="/discover/deals" element={<DealsPage />} />
              <Route path="/discover/beats" element={<BeatsPage />} />
              <Route path="/discover/scenery" element={<SceneryPage />} />
              <Route path="/discover/new" element={<NewPage />} />
              <Route path="/discover/digital" element={<DigitalPage />} />
              <Route path="/discover/classical" element={<ClassicalPage />} />
              <Route path="/discover/portraits" element={<DealsPage />} />

              {/* <Route path="/landing" element={<LandingPage />} /> */}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:username" element={<ProfilePage />} />
              <Route path="/login2" element={<LoginPage />} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/transaction" element={<TransactionPage />} />
              <Route path="/transaction/success" element = {<SuccessfulTransactionPage/>} />
              <Route path="/register2" element={<RegisterPage />} />
              <Route path="/testing" element={<TestingPage />} />
              <Route path="/testing2" element={<TestingPageNeo />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/message" element={<UpdatedMessagePage />} />
              <Route path="/message/search" element={<MessageSearch />} />
              <Route path="/successful" element={<UserCreatedPage />} />
              
              <Route path="/dashboard/seller" element={<SellerDashboardPage />} />
              <Route path="/dashboard/admin" element={<AdminDashboardPage />} />

              <Route path="/login" element={<LoginPageUpdate />} />
              <Route path="/register" element={<RegisterPageUpdate />} />
              <Route path="/landing" element={<Landing2 />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </div>
  );
}

export default App;