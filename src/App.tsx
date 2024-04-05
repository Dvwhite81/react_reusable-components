import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Logo from './assets/images/Logo-Circle.png';
import { cards } from './utils/data';

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Modal from './components/Modal/Modal';
import OpenModalBtn from './components/Modal/OpenModalBtn';
import CarouselPage from './pages/CarouselPage';
import CardGridPage from './pages/CardGridPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  const [modalEffectClass, setModalEffectClass] = useState('');

  const logoLink = {
    label: 'Home',
    path: '/',
    element: <Home />,
    imageSrc: Logo,
  };

  const pages = [
    {
      label: 'Profile',
      path: '/profile',
      side: 'dropdown',
      element: <Profile />,
    },
    {
      label: 'Saved',
      path: '/saved',
      side: 'dropdown',
      element: <Saved />,
    },
    {
      label: 'CarouselPage',
      path: '/CarouselPage',
      side: 'left',
      element: <CarouselPage cards={cards} />,
    },
    {
      label: 'CardGridPage',
      path: '/CardGridPage',
      side: 'right',
      element: <CardGridPage cards={cards} />,
    },
    {
      label: 'LoginPage',
      path: '/LoginPage',
      side: 'dropdown',
      element: <LoginPage />,
    },
    {
      label: 'RegisterPage',
      path: '/RegisterPage',
      side: 'dropdown',
      element: <RegisterPage />,
    },
  ];

  const allPages = [logoLink, ...pages];

  const links = pages.map((page) => {
    const { label, path, side } = page;
    const link = { label, path, side };
    return link;
  });

  return (
    <div className="app">
      <NavBar links={links} logoLink={logoLink} />

      <div className="main-container">
        <Routes>
          {allPages.map((page) => (
            <Route key={page.label} path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>

      <div className={`whole-modal ${modalEffectClass}`}>
        <Modal setModalEffectClass={setModalEffectClass} />
        <OpenModalBtn setModalEffectClass={setModalEffectClass} />
      </div>
    </div>
  );
}

export default App;
