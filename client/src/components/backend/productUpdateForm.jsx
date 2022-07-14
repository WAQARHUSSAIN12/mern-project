import React, { Component,useEffect,useState } from 'react'
import axios from "axios"; 
import { useParams } from 'react-router-dom';
const Swal = require('sweetalert2');
export default function ProductUpdateForm(){

const [productName, setproductName] = useState();
const [productDesc, setproductDesc] = useState();
const [qty, setqty] = useState();
const [price, setPrice] = useState();
const [category, setCategory] = useState();
const [product, getProduct] = useState([]);
const [oldFile, setoldFile] = useState();
const [selectedFile, setselectedFile] = useState();
const { id } = useParams();



// FUNCTION TO UPDATE PRODUCT
function handleSubmit(event) {

    event.preventDefault();

    const product = new FormData();
    product.append('id', id);
    product.append('productName',  productName);
    product.append('productDesc',  productDesc);
    product.append('qty',  qty);
    product.append('price',  price);
    product.append('category',  category);
    product.append('file',  selectedFile);

    axios({
    method:'post',
    url: 'http://localhost:4111/updateProduct',
    data: product,
    })
    .then(res=>{
        if(res.data.message){
        Swal.fire(
            'Success',
            'Product Updated Successfully' ,
            'success'
        );
        }
        //window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
    })
}

// GET PRODUCT BY ID FUNCTION
const getProductById = () => {
    const productData = {
      proId: id,
    }
    axios({
      method: 'post',
      url: 'http://localhost:4111/getProduct',
      data: productData,
    })
      .then(res => {
        const product = res.data;
        getProduct(product);
        setproductName(product.name);
        setproductDesc(product.desc);
        setqty(product.qty);
        setPrice(product.Price);
        setCategory(product.category.name);
        setoldFile(product.photoUrl);
      })
}

const  [categories,getCategories] = useState([]);

useEffect(()=>{
    getAllCategories();
    getProductById();
},[]);

// GET ALL CATEGORIES FUNCTION
const getAllCategories = () => {
    axios.get(`http://localhost:4111/getCategories`)
    .then(res => {
        const categories = res.data;
        getCategories(categories)
    })
}

const onChangeHandler = (event) => {
  setselectedFile(event.target.files[0]);
  console.log(event.target.files[0]);
}

return(
<>       
<div className="page-wrapper">
  {/* Bread crumb and right sidebar toggle */}
  {/* ============================================================== */}
  <div className="page-breadcrumb">
    <div className="row">
      <div className="col-12 d-flex no-block align-items-center">
        <h4 className="page-title">Update Product Form</h4>
        <div className="ms-auto text-end">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">
                Product
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
          <form  onSubmit = { handleSubmit } className="form-horizontal" encType="multipart/form-data" >
            <div className="card-body">
              <h4 className="card-title">Product Info</h4>
              <div className="form-group row">
                <label htmlFor="fname" className="col-sm-3 text-end control-label col-form-label">Product Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={productName} name="productName" onChange={e => setproductName(e.target.value)}  id="fname" placeholder="Product Name Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Product Description</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={productDesc} name="productDesc" onChange={e => setproductDesc(e.target.value)} id="lname" placeholder="Product DEsc Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lname" className="col-sm-3 text-end control-label col-form-label">Quantity</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={qty} name="qty" onChange={e => setqty(e.target.value)} id="lname" placeholder="Product qty Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">Price</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={price} name="price" onChange={e => setPrice(e.target.value)} id="email1" placeholder="Price Here" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email1" className="col-sm-3 text-end control-label col-form-label">Category</label>
                <div className="col-sm-9">
                  <select className="form-control" name="category" onChange={e => setCategory(e.target.value)} id="">
                    <option  value={category} selected disabled > Select category </option>
                    {
                        categories.map((category,i) =>
                        <option value={`${category._id}`}> {category.name}  </option> 
                          
                        )
                      }
                  </select>
                 </div>
              </div>
              <div className="form-group row">
                
                <div className="col-sm-9"> 
                      <img src="localhost:4111/public1657177619008-FB_IMG_1655630849125.jpg" alt="" srcset="" />
                </div>

              </div>
              <div className="form-group row">
                <label htmlFor="cono1" className="col-sm-3 text-end control-label col-form-label">Image</label>
                <div className="col-sm-9"> 
                <input type="hidden" value={oldFile} className="form-control" name="oldFile" id="cono1" placeholder="select file here" />
                <input type="file" value={selectedFile} className="form-control" name="file" onChange={onChangeHandler} id="cono1" placeholder="select file here" />
                </div>
              </div>
            </div>
            <div className="border-top">
              <div className="card-body">
                <button type="submit" className="btn btn-primary">
                  Update Product
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