import React, { Component,useEffect,useState } from 'react'
import { Route,Link,useNavigate,NavLink,Routes,Navigate, BrowserRouter as Router } from 'react-router-dom'  
 
import {Helmet} from "react-helmet";
import Header from './partial/header';
import Footer from './partial/footer';
import Dashboard from './dashboard';
import ProductForm from './productForm';
import ListProducts from './listProducts';
import UserForm from './userForm';
import ListUsers from './listUsers';
import ListOrders from './listOrders';
import Reports from './report';
import CategoryForm from './categoryform';
import ListCategories from "./listCategories";
import CategoryUpdateForm from './categoryUpdateForm';
import ProductUpdateForm from './productUpdateForm';
import Login from './login';
import UserUpdateForm from './userUpdateForm';
export default function Admin () {

    const navigate = useNavigate();

    function islogin(){
        const  isLoggedIn =  localStorage.getItem("LoginToken");
        if(isLoggedIn){
            return true;
        }else{
            return false;
        }
    }
    if(!islogin()){
        return (
            <>
            <Helmet>
                {/* <!-- Favicon icon --> */}
                <link rel="icon" type="image/png" sizes="16x16" href="../../../admin/assets/images/favicon.png"
                />
                {/* <!-- Custom CSS --> */}
                <link href="../../../admin/assets/libs/flot/css/float-chart.css" rel="stylesheet" />
                {/* <!-- Custom CSS --> */}
                <link href="../../../admin/dist/css/style.min.css" rel="stylesheet" />
            </Helmet>

            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                  <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route
                            path="*"
                            element={<Navigate to="/admin/login" replace />}
                        />
                  </Routes>
            </div>
            <Helmet>
                {/* <!-- All Jquery --> */}
                {/* <!-- ============================================================== --> */}
                <script src="../../../admin/assets/libs/jquery/dist/jquery.min.js"></script>
                {/* <!-- Bootstrap tether Core JavaScript --> */}
                <script src="../../../admin/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                <script src="../../../admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
                <script src="../../../admin/assets/extra-libs/sparkline/sparkline.js"></script>
                {/* <!--Wave Effects --> */}
                <script src="../../../admin/dist/js/waves.js"></script>
                {/* <!--Menu sidebar --> */}
                <script src="../../../admin/dist/js/sidebarmenu.js"></script>
                {/* <!--Custom JavaScript --> */}
                <script src="../../../admin/dist/js/custom.min.js"></script>
                {/* <!--This page JavaScript --> */}
                {/* <!-- <script src="../../../admin/dist/js/pages/dashboards/dashboard1.js"></script> --> */}
                {/* <!-- Charts js Files --> */}
                <script src="../../../admin/assets/libs/flot/excanvas.js"></script>
                <script src="../../../admin/assets/libs/flot/jquery.flot.js"></script>
                <script src="../../../admin/assets/libs/flot/jquery.flot.pie.js"></script>
                <script src="../../../admin/assets/libs/flot/jquery.flot.time.js"></script>
                <script src="../../../admin/assets/libs/flot/jquery.flot.stack.js"></script>
                <script src="../../../admin/assets/libs/flot/jquery.flot.crosshair.js"></script>
                <script src="../../../admin/assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
                <script src="../../../admin/dist/js/pages/chart/chart-page-init.js"></script>
                <script src="../../../admin/assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
                <script src="../../../admin/assets/extra-libs/multicheck/jquery.multicheck.js"></script>
                <script src="../../../admin/assets/extra-libs/DataTables/datatables.min.js"></script>
            </Helmet>
          </>
          )
    }else{

    
    return (
      <>
      <Helmet>
          {/* <!-- Favicon icon --> */}
          <link rel="icon" type="image/png" sizes="16x16" href="../../../admin/assets/images/favicon.png"
          />
          {/* <!-- Custom CSS --> */}
          <link href="../../../admin/assets/libs/flot/css/float-chart.css" rel="stylesheet" />
          {/* <!-- Custom CSS --> */}
          <link href="../../../admin/dist/css/style.min.css" rel="stylesheet" />
      </Helmet>
      
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <Header />          
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addProduct" element={<ProductForm />} />
                <Route path="/listProduct" element={<ListProducts />} />
                <Route path="/addCategory" element={<CategoryForm />} />
                <Route path="/listCategories" element={<ListCategories />} />
                <Route path="/addUser" element={<UserForm />} />
                <Route path="/listUsers" element={<ListUsers />} />
                <Route path="/listOrders" element={<ListOrders />} />
                <Route path="/report" element={<Reports />} />
                <Route path="/catedit/:id" element={<CategoryUpdateForm  />} />  
                <Route path="/proedit/:id" element={<ProductUpdateForm  />} />  
                <Route path="/useredit/:id" element={<UserUpdateForm  />} />
                      <Route
                            path="*"
                            element={<Navigate to="/admin/dashboard" replace />}
                        />             
            </Routes>
        <Footer /> 
      </div>
      <Helmet>
          {/* <!-- All Jquery --> */}
          {/* <!-- ============================================================== --> */}
          <script src="../../../admin/assets/libs/jquery/dist/jquery.min.js"></script>
          {/* <!-- Bootstrap tether Core JavaScript --> */}
          <script src="../../../admin/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
          <script src="../../../admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js"></script>
          <script src="../../../admin/assets/extra-libs/sparkline/sparkline.js"></script>
          {/* <!--Wave Effects --> */}
          <script src="../../../admin/dist/js/waves.js"></script>
          {/* <!--Menu sidebar --> */}
          <script src="../../../admin/dist/js/sidebarmenu.js"></script>
          {/* <!--Custom JavaScript --> */}
          <script src="../../../admin/dist/js/custom.min.js"></script>
          {/* <!--This page JavaScript --> */}
          {/* <!-- <script src="../../../admin/dist/js/pages/dashboards/dashboard1.js"></script> --> */}
          {/* <!-- Charts js Files --> */}
          <script src="../../../admin/assets/libs/flot/excanvas.js"></script>
          <script src="../../../admin/assets/libs/flot/jquery.flot.js"></script>
          <script src="../../../admin/assets/libs/flot/jquery.flot.pie.js"></script>
          <script src="../../../admin/assets/libs/flot/jquery.flot.time.js"></script>
          <script src="../../../admin/assets/libs/flot/jquery.flot.stack.js"></script>
          <script src="../../../admin/assets/libs/flot/jquery.flot.crosshair.js"></script>
          <script src="../../../admin/assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
          <script src="../../../admin/dist/js/pages/chart/chart-page-init.js"></script>
          <script src="../../../admin/assets/extra-libs/multicheck/datatable-checkbox-init.js"></script>
          <script src="../../../admin/assets/extra-libs/multicheck/jquery.multicheck.js"></script>
          <script src="../../../admin/assets/extra-libs/DataTables/datatables.min.js"></script>
      </Helmet>
    </>
    )
    }
}