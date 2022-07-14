import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Link,NavLink,Routes, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';
import App from './App';
import Contact from "./components/frontend/contact";
import About from './components/frontend/about';

const root = ReactDOM.createRoot(document.getElementById('root'));

let activeStyle = {
  color: "green",
  border: "1px green solid",
};

var isActive = true;
root.render(
     <div>  
      <h1>React Router Example</h1>  
        <Router>
            <ul>  
              <li>  
                <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle : undefined}> Home </NavLink>  
              </li>  
              <li>  
                <NavLink to="/about"  style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>  
              </li>  
              <li>  
                <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>  
              </li>  
            </ul>  
          <Routes>
            <Route path="/" element={<App/>}/>  
            <Route path="/contact" element={<Contact />}/>  
            <Route path="/about" element={<About />}/> 
          </Routes>
      </Router>
    </div>  
);