const mongoose = require('mongoose');
const UsersModel = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");

// GET ALL CATEGORIES FUNCTION
const getCategories = (req,res)=>{
  Category.find()
  .then(categories => {
    res.send(categories);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

// GET SINGLE CATEGORY BY ID FUNCTION 
const getCategory = (req,res)=>{
  Category.findOne({_id: req.body.cateid})
  .then(category => {
    res.send(category);
  })
  .catch(err => {
      res.status(500).send({ message : err.message || "Error Occurred while retriving user information" });
  })
}

// INSERT CATEGORY FUNCTION
const insertCategory = (req,res) => {
  const name = req.body.name;
  var categoryDetails = new Category({
    name: name,
  });
  categoryDetails.save((err, doc) => {
        if (!err){
          res.send({ message : "Product category added successfully"});
        }
        else{
          res.send({ message : 'Error during record insertion : ' + err});
        }
  });
}

// UPDATE CATEGORY FUNCTION
const updateCategory = (req,res) =>{
    const name = req.body.name;
    const id = req.body.id;
    data = {"name":req.body.name}
    Category.findByIdAndUpdate({_id:id},data, function(err, result){
      if(err){
        res.send({ message : 'Error during record insertion : ' + err});
      }
      else{
        res.send({ message : "Product category added successfully"});
      }
  });
}

// DELETE CATEGORY BY ID FUNCTION
const deleteCategory = (req,res) =>{
  const id = req.body.cateid;
  Category.deleteOne({_id:id}, function(err, result){
    if(err){
      res.send({ message : 'Error during record deletion : ' + err});
    }
    else{
      res.send({ message : "Product category deleted successfully"});
    }
  });
}

module.exports = {
  insertCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};