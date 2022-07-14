import React, { Component } from 'react'

export default function Dashboard() {
return (
<>
{/* Page wrapper  */}
{/* ============================================================== */}
<div className="page-wrapper">
  {/* ============================================================== */}
  {/* Bread crumb and right sidebar toggle */}
  {/* ============================================================== */}
  <div className="page-breadcrumb">
    <div className="row">
      <div className="col-12 d-flex no-block align-items-center">
        <h4 className="page-title">Dashboard</h4>
        <div className="ms-auto text-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">
                Library
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
    {/* Sales Cards  */}
    {/* ============================================================== */}
    <div className="row">
      {/* Column */}
      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-info text-center">
            <h1 className="font-light text-white">
               66
            </h1>
            <h6 className="text-white">Total Customer</h6>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-cyan text-center">
            <h1 className="font-light text-white">
               9
            </h1>
            <h6 className="text-white">Total Categories</h6>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-success text-center">
            <h1 className="font-light text-white">
               200
            </h1>
            <h6 className="text-white">Total Products </h6>
          </div>
        </div>
      </div>
      {/* Column */}

      {/* Column */}
       <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-cyan text-center">
            <h1 className="font-light text-white">
               1000
            </h1>
            <h6 className="text-white">Total Orders </h6>
          </div>
        </div>
      </div>
      {/* Column */}

      {/* Column */}
      <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-success text-center">
            <h1 className="font-light text-white">
              800
            </h1>
            <h6 className="text-white">Orders Complete </h6>
          </div>
        </div>
      </div>
      {/* Column */}

       {/* Column */}
       <div className="col-md-6 col-lg-4 col-xlg-3">
        <div className="card card-hover">
          <div className="box bg-danger text-center">
            <h1 className="font-light text-white">
              200
            </h1>
            <h6 className="text-white">Orders Pendings</h6>
          </div>
        </div>
      </div>
      {/* Column */}
    
    </div>
    {/* ============================================================== */}
    {/* Sales chart */}
    {/* ============================================================== */}
    
    {/* ============================================================== */}
    {/* Sales chart */}
    {/* ============================================================== */}
    {/* ============================================================== */}
    {/* Recent comment and chats */}
    {/* ============================================================== */}
    <div className="row">
      {/* column */}
      <div className="col-lg-12">
        {/* card */}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-0">Order Status</h4>
            <div className="mt-3">
              <div className="d-flex no-block align-items-center">
                <span>20% Order Pendings</span>
                <div className="ms-auto">
                  <span>200</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '20%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>70% Order Completed</span>
                <div className="ms-auto">
                  <span>800</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>10% Order Canceled</span>
                <div className="ms-auto">
                  <span>100</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '53%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div>
              <div className="d-flex no-block align-items-center mt-4">
                <span>3% Online Users</span>
                <div className="ms-auto">
                  <span>8</span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '3%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ============================================================== */}
    {/* Recent comment and chats */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* End Container fluid  */}
</div>

</>
    )
  }