import React, { Component } from 'react'
import { Route, Link,NavLink,Routes, BrowserRouter as Router } from 'react-router-dom'
import Contact from './contact'
import Home from './home'
import Footer from './partial/footer'
import Header from './partial/header'
import Product from './product'
import Viewcart from './viewcart'
import {Helmet} from "react-helmet";



export default class Customer extends Component {
  render() {
    return (
    <>
            <Helmet>
                <link rel="apple-touch-icon" href="../../../logo192.png" />
                <link rel="manifest" href="../../../manifest.json" />
                <link rel="icon" type="../../../image/png" href="images/favicon.png" />
                {/* Web Font */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />
                {/* StyleSheet */}
                {/* Bootstrap */}
                <link rel="stylesheet" href="../../../css/bootstrap.css" />
                {/* Magnific Popup */}
                <link rel="stylesheet" href="../../../css/magnific-popup.min.css" />
                {/* Font Awesome */}
                <link rel="stylesheet" href="../../../css/font-awesome.css" />
                {/* Fancybox */}
                <link rel="stylesheet" href="../../../css/jquery.fancybox.min.css" />
                {/* Themify Icons */}
                <link rel="stylesheet" href="../../../css/themify-icons.css" />
                {/* Nice Select CSS */}
                <link rel="stylesheet" href="../../../css/niceselect.css" />
                {/* Animate CSS */}
                <link rel="stylesheet" href="../../../css/animate.css" />
                {/* Flex Slider CSS */}
                <link rel="stylesheet" href="../../../css/flex-slider.min.css" />
                {/* Owl Carousel */}
                <link rel="stylesheet" href="../../../css/owl-carousel.css" />
                {/* Slicknav */}
                <link rel="stylesheet" href="../../../css/slicknav.min.css" />
                {/* Eshop StyleSheet */}
                <link rel="stylesheet" href="../../../css/reset.css" />
                <link rel="stylesheet" href="../../../style.css" />
                <link rel="stylesheet" href="../../../css/responsive.css" />
                <title>React App</title>
            </Helmet>

            <Header />
         
              <Routes>
                  <Route path="/" element={<Product />} />
                  <Route path="/viewcart" element={<Viewcart />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>

            <Footer /> 

            <Helmet>
              {/* Jquery*/} 
              <script src="../../../js/jquery.min.js" /> 
              <script src="../../../js/jquery-migrate-3.0.0.js" />  
              <script src="../../../js/jquery-ui.min.js"/> 
              {/* {<!-- Popper JS -->} */}
              <script src="../../../js/popper.min.js"/> 
              {/* <!-- Bootstrap JS --> */}
              <script src="../../../js/bootstrap.min.js"/> 
              {/* <!-- Color JS --> */}
              <script src="../../../js/colors.js"/> 
              {/* <!-- Slicknav JS --> */}
              <script src="../../../js/slicknav.min.js"/> 
              {/* <!-- Owl Carousel JS --> */}
              <script src="../../../js/owl-carousel.js"/> 
              {/* <!-- Magnific Popup JS --> */}
              <script src="../../../js/magnific-popup.js"/> 
              {/* <!-- Waypoints JS --> */}
              <script src="../../../js/waypoints.min.js"/>
              {/* <!-- Countdown JS --> */}
              <script src="../../../js/finalcountdown.min.js"/>
              {/* <!-- Nice Select JS --> */}
              <script src="../../../js/nicesellect.js"/> 
              {/* <!-- Flex Slider JS --> */}
              <script src="../../../js/flex-slider.js"/> 
              {/* <!-- ScrollUp JS --> */}
              <script src="../../../js/scrollup.js"/> 
              {/* <!-- Onepage Nav JS --> */}
              <script src="../../../js/onepage-nav.min.js"/> 
              {/* <!-- Easing JS --> */}
              <script src="../../../js/easing.js"/> 
              {/* <!-- Active JS --> */}
              <script src="../../../js/active.js"/> 
            </Helmet>
        </>
    )
  }
}