import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
const Swal = require('sweetalert2');
export default function CategoryUpdateForm() {
  const [name, setName] = useState();
  const [Category, getCategory] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getCategoryById();
  }, []);

const getCategoryById = () => {
    const cateData = {
      cateid: id,
    }
    axios({
      method: 'post',
      url: 'http://localhost:4111/getCategory',
      data: cateData,
    })
      .then(res => {
        const Category = res.data;
        getCategory(Category);
        console.log(Category.name);
        setName(Category.name);
        console.log(name);
      })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const category = {
      name: name,
      id: id
    }
    axios({
      method: 'post',
      url: 'http://localhost:4111/updateCategory',
      data: category,
    })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        if (res.data.message) {
          Swal.fire(
            'Success',
            'Category Updated Successfully',
            'success'
          );
        }
      })
  }
  return (
    <>
      <div className="page-wrapper">
        {/* ============================================================== */}
        {/* Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h4 className="page-title">Category Form</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"></a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Category
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
            <div className="col-md-12">
              <div className="card">
                <form onSubmit={handleSubmit} className="form-horizontal"  >
                  <div className="card-body">
                    <h4 className="card-title">Category Info</h4>
                    <div className="form-group row">
                      <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Category Name</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" value={name} name="name" onChange={e => setName(e.target.value)} id="fname" placeholder="Category Name Here" />
                      </div>
                    </div>
                  </div>
                  <div className="border-top">
                    <div className="card-body">
                      <button type="submit" className="btn btn-primary">
                        Update Category
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* editor */}
        </div>
      </div>
    </>
  )
}