const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const multer = require('multer');

// INSERT PRODUCT HERE
const insertProduct = (req,res)=>{
  //console.log(req.body);
  var productDetails = new Product({
    name: req.body.productName ,
    desc: req.body.productDesc ,
    qty:  Number(req.body.qty),
    Price: Number(req.body.price),
    photoUrl:req.file.filename,
    isActive:true,
    category: [req.body.category],
  });
  productDetails.save((err, doc) => {
        if (!err){
          res.send({ message : "Product added successfully"});
        }
        else{
          res.send({ message : 'Error during record insertion : ' + err});
        }
  });
}

// UPDATE PRODUCT FUNCTION
const updateProduct = (req,res) =>{

  const id = req.body.id;
  const data = 
  {
    name: req.body.productName ,
    desc: req.body.productDesc ,
    qty:  Number(req.body.qty),
    Price: Number(req.body.price),
    photoUrl: req.body.filename,
    isActive:true,
    category: [req.body.category],
  }
    Product.findByIdAndUpdate({_id:id},data, function(err, result){
      if(err){
        res.send({ message : 'Error during record insertion : ' + err});
      }
      else{
        res.send({ message : "Product Updated successfully"});
      }
    });
} 

// GET PRODUCT HERE
const getProducts = (req,res)=>{
  Product.find().populate("category","name")
            .then(product => {
              res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
}

// GET PRODUCT BY ID
const getProduct = (req,res)=>{
  Product.findOne({_id: req.body.proId})
  .then(product => {
    res.send(product);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

// DELETE PRODUCT BY ID FUNCTION
const deleteProduct = (req,res) =>{
  const id = req.body.productId;
  Product.deleteOne({_id:id}, function(err, result){
    if(err){
      res.send({ message : 'Error during record deletion : ' + err});
    }
    else{
      res.send({ message : "Product deleted successfully"});
    }
  });
}

// Helper functions to upload product image
const uploadProductImage = () => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })
  var type = multer({ storage: storage }).single('file')
  return type;
}

module.exports = {
  insertProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,


  //Helper function export
  uploadProductImage,
};