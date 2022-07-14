import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
import { NavLink } from 'react-router-dom';
const Swal = require('sweetalert2');

export default function ListCategories(){

  const  [categories,getCategories] = useState([]);
 
  useEffect(()=>{
    getAllCategories();
  },[]);


// GET ALL CATEGORIES REQUEST
  const getAllCategories = () => {
      axios.get(`http://localhost:4111/getCategories`)
      .then(res => {
        const categories = res.data;
        getCategories(categories)
      })
  }

// DELETE BY ID ALERT
const deleteCategory = (e) => {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert Category!",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          deleteById(e.target.value);
        }else{

        }
    });
    
}
// DELETE BY ID REQUEST
const deleteById = (id) => {

    const cateData = {
      cateid: id,
    }

    axios({
      method: 'post',
      url: 'http://localhost:4111/deleteCategory',
      data: cateData,
    })
      .then(res => {
        if(res.data.message){
          Swal.fire(
            'Success',
            'Category deleted successfully' ,
            'success'
          );
          getAllCategories();
        }
      })
}

 return (
    <> 
        {/* ============================================================== */}
      {/* Page wrapper  */}
      {/* ============================================================== */}
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">List of category</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Categories
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
          {/* ============================================================== */}
          {/* Start Page Content */}
          {/* ============================================================== */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">CATEGORIES</h5>
                  <div className="table-responsive">
                    <table id="zero_config" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Created At</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        categories.map((category,i) =>
                          <tr key={category.id}>
                            <td> { ++i }</td>
                            <td>{category.name}</td>
                            <td>{category.createdDate}</td>
                            <td>
                              <NavLink to={`/admin/catedit/${category._id}`} className="btn btn-primary"> UPDATE </NavLink> 
                              <button  value={category._id} onClick={deleteCategory} className="btn btn-danger"> DELETE </button> 
                            </td>
                          </tr>  
                        )
                      }
                       </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================== */}
          {/* End PAge Content */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Right sidebar */}
          {/* ============================================================== */}
          {/* .right-sidebar */}
          {/* ============================================================== */}
          {/* End Right sidebar */}
          {/* ============================================================== */}
        </div>
      </div>
      </>     
    )
}
