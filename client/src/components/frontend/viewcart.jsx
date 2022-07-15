import React, { Component, useEffect, useState, useRef } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Swal = require('sweetalert2');

export default function Viewcart() {
const  [cartItems,getcartItems] = useState([]);
// const  [totalAmout,settotalAmount] = useState([]);
var totalAmount = 0;
const navigate = useNavigate();
    useEffect(()=>{
        getAllCartItems();
    },[]);

// GET ALL CART ITEM REQUEST 
const getAllCartItems = () => {
      axios.get(`https://mern-project-eshop.herokuapp.com/getAllCartItems`)
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
        url: 'https://mern-project-eshop.herokuapp.com/removeCartItem',
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

  const [customerName, setcustomerName] = useState();
  const [customerEmail, setcustomerEmail] = useState();
  const [customerContact, setcustomerContact] = useState();
  const [customerPostCode, setcustomerPostCode] = useState();
  const [devliveryAddress, setdevliveryAddress] = useState();
  const [customerInstruction, setcustomerInstruction] = useState();
  const [customerToken, setcustomerToken] = useState();

function handleSubmit(event) {

  event.preventDefault();
  const order = new FormData();
  order.append('customerName',  customerName);
  order.append('customerEmail',  customerEmail);
  order.append('customerContact',  customerContact);
  order.append('customerPostCode',  customerPostCode);
  order.append('devliveryAddress',  devliveryAddress);
  order.append('customerInstruction',  customerInstruction);
  order.append('customerToken',localStorage.getItem("ClintToken"));

  // alert(order.productName + " " + order.productDesc + " " + order.qty + " " + order.price + " " + order.category);
  console.log(order);
  for (var key of order.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }

  axios({
    method:'post',
    url: 'https://mern-project-eshop.herokuapp.com/createOrder',
    data: order,
  })
    .then(res=>{
      if(res.data.message){
        Swal.fire(
          'Thank You',
          'Your order has been placed successfully we will contact you soon for confirmation' ,
          'success'
        );
            setTimeout(function(){
              window.location.href = 'https://mern-project-eshop.herokuapp.com';
           }, 3000);
      }
      //window.location = "/listCategories" //This line of code will redirect you once the submission is succeed
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
             {
              totalAmount +=product.UnitPrice;
              return( 
              <tr>
                <td className="image" data-title="No">
                    <img style={{width: "100px", height:"100px", minHeight:"100px" }} src={`https://mern-project-eshop.herokuapp.com/public/${product.product[0].photoUrl}`} alt="#" />
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

                {totalAmount != 0 ?  <div className="right">
                  <ul>
                    <li>Cart Subtotal<span>PKR {totalAmount}</span></li>
                    <li>Shipping<span>Free</span></li>
                    <li className="last">You Pay<span>PKR {totalAmount}</span></li>
                  </ul>
                  <div className="button5">
                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#" className="btn">checkout cash on delivery </a>
                    <NavLink to="/"  className="btn" >Continue shopping </NavLink>
                  </div>
                </div>: null  }
              </div>
            </div>
          </div>
          {/*/ End Total Amount */}
        </div>
      </div>
    </div>
  </div>
  {/*/ End Shopping Cart */}

  {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true" /></button>
              </div>
              <div className="modal-body">
              <section id="contact-us" className="contact-us section">
                  <div className="container">
                    <div className="contact-head">
                      <div className="row">
                        <div className="col-lg-12 col-12">
                          <div className="form-main">
                            <div className="title">
                              <h4>Checkout form</h4>
                              <h3>Please fill below detail for checkout/place your order</h3>
                            </div>
                            <form className="form"  onSubmit = { handleSubmit }  encType="multipart/form-data" >
                              <div className="row">
                                <div className="col-lg-4 col-12">
                                  <div className="form-group">
                                    <label>Your Name<span>*</span></label>
                                    <input name="customerName" onChange={e => setcustomerName(e.target.value)}  type="text" placeholder />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                  <div className="form-group">
                                    <label>Your Email<span>*</span></label>
                                    <input name="customerEmail" onChange={e => setcustomerEmail(e.target.value)}  type="email" placeholder />
                                  </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                  <div className="form-group">
                                    <label>Your Contact<span>*</span></label>
                                    <input name="customerContact" onChange={e => setcustomerContact(e.target.value)} type="phone"    placeholder />
                                  </div>	
                                </div>
                                <div className="col-lg-4 col-12">
                                  <div className="form-group">
                                    <label>Postal Code<span>*</span></label>
                                    <input name="customerPostCode" onChange={e => setcustomerPostCode(e.target.value)} type="text"   placeholder />
                                  </div>	
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="form-group">
                                      <label>Delivery Address <span>*</span></label>
                                      <input name="devliveryAddress" onChange={e => setdevliveryAddress(e.target.value)} type="text" placeholder />
                                    </div>	
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="form-group">
                                      <label>Message/Instruction <span>*</span></label>
                                      <input name="customerInstruction" onChange={e => setcustomerInstruction(e.target.value)} type="text" placeholder />
                                    </div>	
                                </div>
                                <div className="col-lg-12 col-12">
                                  <div className="form-group button">
                                    <button type="submit" className="btn ">Checkout</button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
          </div>
      </div>
    </div>
  {/* Modal */} 
</div>
</>
)
}