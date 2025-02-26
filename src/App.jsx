import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import Users from './components/Users';
import Contact from './components/Contact';
import IndividualComponent from './components/IndividualComponent';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: '/signup',
      element: <SignupPage/>
    },
    {
      path: '/home',
      element : <Home/>
    },
    {
      path: '/products',
      element : <ProductsPage/>
    },
    {
      path: '/users',
      element : <Users/>
    },
    {
      path: '/contact',
      element : <Contact/>
    },
    {
      path: '/individualproduct',
      element : <IndividualComponent/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
