import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
const Swal = require('sweetalert2')

export default function UserForm() {
  const [userName, setuserName] = useState();
  const [userEmail, setuserEmail] = useState();
  const [address, setAddress] = useState();
  const [devliveryAddress, setdevliveryAddress] = useState();
  const [userType, setuserType] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: userName,
      email: userEmail,
      address:address,
      devliveryAddress:devliveryAddress,
      userType:userType,
      password:password
    }
    //alert(user.name + " " + user.email + " " + user.address + " " + user.devliveryAddress + " " + user.userType + " " + password);
    //axios.get('https://mern-project-eshop.herokuapp.com/createCategory', 
    axios({
      method:'post',
      url: 'https://mern-project-eshop.herokuapp.com/createUser',
      data: user,
    })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        if(res.data.message){
          Swal.fire(
            'Success',
            'New User Added Successfully' ,
            'success'
          );
        }
        //window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
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
             <h4 className="page-title">Add User </h4>
             <div className="ms-auto text-end">
               <nav aria-label="breadcrumb">
                 <ol className="breadcrumb">
                   <li className="breadcrumb-item"><a href="#">Home</a></li>
                   <li className="breadcrumb-item active" aria-current="page">
                     User
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
               <form onSubmit = { handleSubmit } className="form-horizontal">
                 <div className="card-body">
                   <h4 className="card-title">User Info</h4>
                   <div className="form-group row">
                     <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Name</label>
                     <div className="col-sm-9">
                       <input type="text" className="form-control" name="userName" onChange={e => setuserName(e.target.value)} id="userName" placeholder="Name Here" />
                     </div>
                   </div>
                   <div className="form-group row">
                     <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Email</label>
                     <div className="col-sm-9">
                       <input type="text" className="form-control" name="userEmail" onChange={e => setuserEmail(e.target.value)} id="email" placeholder="User email here" />
                     </div>
                   </div>
                   <div className="form-group row">
                     <label htmlFor="address" className="col-sm-3 text-end control-label col-form-label">Address</label>
                     <div className="col-sm-9">
                       <input type="text" className="form-control" name="address" onChange={e => setAddress(e.target.value)} id="address" placeholder="Address Here" />
                     </div>
                   </div>
                   <div className="form-group row">
                     <label htmlFor="devliveryAddress" className="col-sm-3 text-end control-label col-form-label">Devlivery Address</label>
                     <div className="col-sm-9">
                       <input type="text" className="form-control" name="devliveryAddress" onChange={e => setdevliveryAddress(e.target.value)} id="devliveryAddress" placeholder="Delivery Address here  " />
                     </div>
                   </div>
                   <div className="form-group row">
                     <label htmlFor="devliveryAddress" className="col-sm-3 text-end control-label col-form-label">User Type</label>
                     <div className="col-sm-9">
                      <select name="userType" id="userType" onChange={e => setuserType(e.target.value)}  className="form-control">
                        <option value="" selected disabled>--select user type</option>
                        <option value="Admin">Admin</option>
                        <option value="Customer" >Customer</option>
                      </select>
                     </div>
                   </div>    
                   <div className="form-group row">
                     <label htmlFor="devliveryAddress" className="col-sm-3 text-end control-label col-form-label">Password </label>
                     <div className="col-sm-9">
                       <input type="password" className="form-control" name="password" onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" />
                     </div>
                   </div>             
                 </div>
                 <div className="border-top">
                   <div className="card-body">
                     <button type="submit" className="btn btn-primary">
                        Add User
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