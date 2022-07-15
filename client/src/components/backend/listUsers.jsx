import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
import { NavLink } from 'react-router-dom';
const Swal = require('sweetalert2');

export default function ListUsers() {

  const  [users,getUsers] = useState([]);
 
  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = () => {
      axios.get(`https://mern-project-eshop.herokuapp.com/getUsers`)
      .then(res => {
        const users = res.data;
        getUsers(users)
      })
  }

// DELETE PRODUCT BY ID ALERT
const deleteUser = (e) => {

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this User!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      deleteUserById(e.target.value);
    }else{

    }
});

}
// DELETE User BY ID REQUEST
const deleteUserById = (id) => {

const userData = {
  userId: id,
}

axios({
  method: 'post',
  url: 'https://mern-project-eshop.herokuapp.com/deleteUser',
  data: userData,
})
  .then(res => {
    if(res.data.message){
      Swal.fire(
        'Success',
        'User deleted successfully' ,
        'success'
      );
      getAllUsers();
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
              <h4 className="page-title">List Of users</h4>
              <div className="ms-auto text-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Users
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
                  <h5 className="card-title">USERS</h5>
                  <div className="table-responsive">
                    <table id="zero_config" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Delivery Address</th>
                          <th>User Type</th>
                          <th>Created date</th>
                          <th>Options</th> 
                        </tr>
                      </thead>
                      <tbody>
                      {
                     users.map((user,i) =>
                      <tr key={user.id}>
                      <td> { ++i }</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.devliveryAddress}</td>
                      <td>{user.userType ? user.userType :"" }</td>
                      <td>{user.createdDate}</td>
                      <td>
                        <NavLink to={`/admin/useredit/${user._id}`} className="btn btn-primary"> UPDATE </NavLink> 
                        <button value={user._id} onClick={deleteUser}  className="btn btn-danger"> DELETE </button>                       </td>
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
