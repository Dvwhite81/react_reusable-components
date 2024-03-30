import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Logo from './assets/images/Logo-Circle.png';

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Test4 from './pages/Test4';
import Modal from './components/Modal/Modal';
import OpenModalBtn from './components/Modal/OpenModalBtn';
import './App.css';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';

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
      side: 'left',
      element: <Profile />,
    },
    {
      label: 'Register',
      path: '/register',
      side: 'left',
      element: <RegisterForm />,
    },
    {
      label: 'Saved',
      path: '/saved',
      side: 'right',
      element: <Saved />,
    },
    {
      label: 'Login',
      path: '/login',
      side: 'right',
      element: <LoginForm />,
    },
    {
      label: 'Test1',
      path: '/Test1',
      side: 'dropdown',
      element: <Test1 />,
    },
    {
      label: 'Test2',
      path: '/Test2',
      side: 'dropdown',
      element: <Test2 />,
    },
    {
      label: 'Test3',
      path: '/Test3',
      side: 'dropdown',
      element: <Test3 />,
    },
    {
      label: 'Test4',
      path: '/Test4',
      side: 'dropdown',
      element: <Test4 />,
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
      <div className={`whole-modal ${modalEffectClass}`}>
        <Modal setModalEffectClass={setModalEffectClass} />
        <OpenModalBtn setModalEffectClass={setModalEffectClass} />
      </div>
      <Routes>
        {allPages.map((page) => (
          <Route key={page.label} path={page.path} element={page.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
