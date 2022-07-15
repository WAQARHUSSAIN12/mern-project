import React, { Component } from 'react';
import { useState } from 'react';
import axios from "axios"; 
const Swal = require('sweetalert2');

export default function CategoryForm(){
  
const [name, setName] = useState();
 
 function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: name
    }
    //axios.get('https://mern-project-eshop.herokuapp.com/createCategory', 
    axios({
      method:'post',
      url: 'https://mern-project-eshop.herokuapp.com/createCategory',
      data: user,
    })
    .then(res=>{
        console.log(res);
        console.log(res.data);
        if(res.data.message){
          Swal.fire(
            'Success',
            'You added new category' ,
            'success'
          );
        }
    })
    
  }
 function handleChange(event){
    setName({ name: event.target.value});
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
                     <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                 <form className="form-horizontal" onSubmit = { handleSubmit }>
                   <div className="card-body">
                     <h4 className="card-title">Category Info</h4>
                     <div className="form-group row">
                       <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Category Name</label>
                       <div className="col-sm-9">
                         <input type="text" className="form-control" name = "name" onChange={e => setName(e.target.value)} id="fname" placeholder="Category Name Here" />
                       </div>
                     </div>
                   </div>
                   <div className="border-top">
                     <div className="card-body">
                       <button type="submit" className="btn btn-primary">
                          Add Category
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