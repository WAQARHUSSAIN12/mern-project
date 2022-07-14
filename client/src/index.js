import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Link,NavLink,Routes, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';
import App from './App';
import Contact from "./components/frontend/contact";
import About from './components/frontend/about';
import Header from './components/frontend/partial/header';
import Footer from './components/frontend/partial/footer';
import Home from './components/frontend/home';
import Product from './components/frontend/product';
import Customer from './components/frontend/customer';
import Admin from './components/backend/admin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
          <Route path="/*" element={<Customer/>}/>  
          <Route path="/admin/*" element={<Admin />}/>
      </Routes>
    </Router>
  </>
);