import React, { Component, useEffect, useState, useRef } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Swal = require('sweetalert2');

export default function Viewcart() {
const  [cartItems,getcartItems] = useState([]);
const  [totalAmout,settotalAmount] = useState([]);
const navigate = useNavigate();
    useEffect(()=>{
        getAllCartItems();
    },[]);

// GET ALL CART ITEM REQUEST 
const getAllCartItems = () => {
      axios.get(`http://localhost:4111/getAllCartItems`)
      .then(res => {
        const cartItems = res.data;
        getcartItems(cartItems)
        console.log(cartItems);
      })
}

// REMOVE DATA FROM CART
const removeItem = (e) =>{
    
    const cartData = {
        cartId: e.target.value,
        clientToken : localStorage.getItem("ClintToken")
      }

      axios({
        method: 'post',
        url: 'http://localhost:4111/removeCartItem',
        data: cartData,
      })
        .then(res => {
          if(res.data.message){
            Swal.fire(
              'Success',
              'Item remove from ' ,
              'success'
            );
            getAllCartItems();
          }
        })
}

return (
<>
<div>
  {/* Breadcrumbs */}
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bread-inner">
            <ul className="bread-list">
              <li><a href="index1.html">Home<i className="ti-arrow-right" /></a></li>
              <li className="active"><a href="blog-single.html">Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Shopping Cart */}
  <div className="shopping-cart section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Shopping Summery */}
          <table className="table shopping-summery">
            <thead>
              <tr className="main-hading">
                <th>PRODUCT</th>
                <th>NAME</th>
                <th className="text-center">UNIT PRICE</th>
                <th className="text-center">TOTAL</th> 
                <th className="text-center"><i className="ti-trash remove-icon" /></th>
              </tr>
            </thead>
            <tbody>
            {
             cartItems.map((product,i) =>
              <tr>
                <td className="image" data-title="No">
                    <img style={{width: "100px", height:"100px", minHeight:"100px" }} src={`http://localhost:4111/public/${product.product[0].photoUrl}`} alt="#" />
                </td>
                <td className="product-des" data-title="Description">
                  <p className="product-name"><a href="#">{ product.product[0].name} </a></p>
                  <p className="product-des">{ product.product[0].desc}</p>
                </td>
                <td className="price" data-title="Price"><span>PKR {product.UnitPrice}</span></td>
                <td className="total-amount" data-title="Total"><span>PKR {product.UnitPrice}</span></td>
                <td className="action" data-title="Remove">
                    <button value={product._id} onClick={removeItem} >
                    REMOVE<i className="ti-trash remove-icon" /> 
                    </button>
                </td>
              </tr>
            )
            }
            </tbody>
          </table>
          {/*/ End Shopping Summery */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {/* Total Amount */}
          <div className="total-amount">
            <div className="row">
              <div className="col-lg-8 col-md-5 col-12">
                <div className="left">
                  <div className="coupon">
                     
                  </div>
                  <div className="checkbox">
                     
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-12">
                <div className="right">
                  <ul>
                    <li>Cart Subtotal<span>$330.00</span></li>
                    <li>Shipping<span>Free</span></li>
                    <li className="last">You Pay<span>$310.00</span></li>
                  </ul>
                  <div className="button5">
                    <a href="#" className="btn">checkout cash on delivery </a>
                    <NavLink to="/" > Continue shopping </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Total Amount */}
        </div>
      </div>
    </div>
  </div>
  {/*/ End Shopping Cart */}
</div>
</>
)
}
