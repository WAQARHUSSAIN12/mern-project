import React, { Component,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
const Swal = require('sweetalert2')
export default function Login() {
    let isLoggedIn;
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(event) {

        event.preventDefault();

        const user = {
            email: email,
            password:password
        }

        axios({
            method:'post',
            url: 'http://localhost:4111/login',
            data: user,
        })
        .then(res=>{
        if(res.data[0] != null){
             
            localStorage.setItem('LoginToken', true);
           // localStorage.setItem('name',res.data[0].name);
            isLoggedIn =  localStorage.getItem("LoginToken"); 
            if (isLoggedIn) {
                 
               { window.location.replace("http://localhost:3000/admin/dashboard") }
                //navigate("/admin/dashboard");
              
            }
        }else{
          Swal.fire(
            'Alert',
            'User not found with these credentials please enter correct email and password' ,
            'error'
          );
        }  
        // window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
        })
    }
  return (
    <>
    <div className="
                auth-wrapper
                d-flex
                no-block
                justify-content-center
                align-items-center
                bg-dark
    ">
    <div className="auth-box bg-dark border-top border-secondary">
    <div id="loginform">
      <div className="text-center pt-5 pb-3">
        <span className="db">
            EASY MART ADMIN
            {/* <img src="../../../admin/assets/images/logo.png" alt="logo" /> */}
        </span>
      </div>
      {/* Form */}
      <form  onSubmit = { handleSubmit }  className="form-horizontal mt-3 " id="loginform" action="index.html">
        
        <div className="row pb-4">
          <div className="col-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-success text-white h-100" id="basic-addon1"><i className="mdi mdi-account fs-4" /></span>
              </div>
              <input type="text" name="email" onChange={e => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-warning text-white h-100" id="basic-addon2"><i className="mdi mdi-lock fs-4" /></span>
              </div>
              <input type="password"  name="password" onChange={e => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
            </div>
          </div>
        </div>
        <div className="row border-top border-secondary">
          <div className="col-12">
            <div className="form-group">
              <div className="pt-3 align-center">
                <button className="btn btn-success float-center text-white" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</>

  )
}
