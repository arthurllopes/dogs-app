import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { GlobalStyle } from './style/GlobalStyle';
import { useDispatch } from 'react-redux'
import {autoLogin} from './store/Login'
import UserAccount from './pages/UserAccount/UserAccount';
import ProtectedRoute from './pages/ProtectedRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Header />
        <main className="body">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="login/*" element={ <Login /> }  />
            <ProtectedRoute path="profile/*" element={ <UserAccount /> } page="/login" />
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
        </main>
          
        <Footer />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
