import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
const Swal = require('sweetalert2')

export default function ProductForm() {

  const [productName, setproductName] = useState();
  const [productDesc, setproductDesc] = useState();
  const [qty, setqty] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [selectedFile, setselectedFile] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const product = new FormData();
    product.append('productName',  productName);
    product.append('productDesc',  productDesc);
    product.append('qty',  qty);
    product.append('price',  price);
    product.append('category',  category);
    product.append('file',  selectedFile);
    // alert(product.productName + " " + product.productDesc + " " + product.qty + " " + product.price + " " + product.category);
    console.log(product);
    for (var key of product.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    axios({
      method:'post',
      url: 'https://mern-project-eshop.herokuapp.com/createProduct',
      data: product,
    })
      .then(res=>{
        if(res.data.message){
          Swal.fire(
            'Success',
            'New Product Added Successfully' ,
            'success'
          );
        }
        //window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
      })
  }


  const  [categories,getCategories] = useState([]);
 
  useEffect(()=>{
    getAllCategories();
  },[]);

  const getAllCategories = () => {
      axios.get(`https://mern-project-eshop.herokuapp.com/getCategories`)
      .then(res => {
        const categories = res.data;
        getCategories(categories)
      })
  }

const onChangeHandler = (event) => {
    setselectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
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
        <h4 className="page-title">Product Form</h4>
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
    {/* Start Page Content */}
    {/* ============================================================== */}
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <form  onSubmit = { handleSubmit } className="form-horizontal" encType="multipart/form-data">
            <div className="card-body">
              <h4 className="card-title">Product Info</h4>
              <div className="form-group row">
                <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Product Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="productName" onChange={e => setproductName(e.target.value)}  id="fname" placeholder="Product Name Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Product Description</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="productDesc" onChange={e => setproductDesc(e.target.value)} id="lname" placeholder="Product DEsc Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Quantity</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="qty" onChange={e => setqty(e.target.value)} id="lname" placeholder="Product qty Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">Price</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="price" onChange={e => setPrice(e.target.value)} id="email1" placeholder="Price Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">Category</label>
                <div className="col-sm-9">
                  <select className="form-control" name="category"  onChange={e => setCategory(e.target.value)} id="">
                    <option value="" selected disabled > Select category </option>
                    {
                        categories.map((category,i) =>
                        <option value={`${category._id}`}> {category.name}  </option> 
                          
                        )
                      }
                  </select>
                 </div>
              </div>
              <div className="form-group row">
                <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">Image</label>
                <div className="col-sm-9">
                  <input type="file" className="form-control" name="file" onChange={onChangeHandler} id="cono1" placeholder="select file here" />
                </div>
              </div>
              {/* <div className="form-group row">
                <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">Message</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div> */}
            </div>
            <div className="border-top">
              <div className="card-body">
                <button type="submit" className="btn btn-primary">
                  Add Product
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