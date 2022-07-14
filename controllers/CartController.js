const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const CartItem = require("../models/CartItem");

const addToCart = (req,res) =>{
  console.log(req.body);
  const productId = req.body.productId;
  Product.findOne({_id: productId})
  .then(product => {
    //console.log(product);
    var cartObj = new CartItem({ 
        Description:"TEST",
        UnitPrice:product.Price,
        TotalPrice:product.Price,
        clientToken:req.body.clientToken,
        product :[productId]
    });
    cartObj.save((err, doc) => {
          if (!err){

            res.send({ message : "Product added To Cart Successfully"});
          }
          else{
            res.send({ message : 'Error during record insertion : ' + err});
          }
    });
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

// GET ALL ITEM FROM CART WITH PRODUCT DETAIL
const getAllCartItems = (req,res) =>{
  CartItem.find().populate("product","name photoUrl")
  .then(cart => {
    res.send(cart)
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
  })
}

// REMOVE PRODUCT FROM CART BY ID AND CLIENT TOKEN ID  FUNCTION
const removeCartItem = (req,res) =>{
  const id = req.body.cartId;
  const clientToken = req.body.clientToken;

  CartItem.deleteOne({_id:id,clientToken:clientToken}, function(err, result){
    if(err){
      res.send({ message : 'Error during record deletion : ' + err});
    }
    else{
      res.send({ message : "Item removed successfully"});
    }
  });
}

module.exports = {
  addToCart,
  getAllCartItems,
  removeCartItem,
};