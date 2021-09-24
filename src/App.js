import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
      
  );
}

export default App;
