const express = require("express");
const multer = require('multer');
// All Controller Intialization
const {
  insertCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const {
  insertProduct,
  getProducts,
  getProduct,
  updateProduct,
  uploadProductImage,
  deleteProduct,
} = require("../controllers/ProductController");

const {
  insertUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  insertMessage,
} = require("../controllers/UserController");

const {
  addToCart,
  getAllCartItems,
  removeCartItem,
  createOrder,
  
} = require("../controllers/CartController");

const router = express.Router();

// Routes For Category
router.post("/createCategory",insertCategory); 
router.get("/getCategories",getCategories); 
router.post("/getCategory",getCategory); 
router.post("/updateCategory",updateCategory); 
router.post("/deleteCategory",deleteCategory);

//Routes For Product
const type = uploadProductImage();
router.post("/createProduct",type,insertProduct); 
router.get("/getProducts",getProducts);
router.post("/getProduct",getProduct);
router.post("/updateProduct",type,updateProduct);
router.post("/deleteProduct",deleteProduct);   

// Routes For Users
router.get("/getUsers",getUsers);
router.post("/createUser",insertUser);
router.post("/getUser",getUser);
router.post("/updateUser",updateUser);
router.post("/deleteUser",deleteUser);
router.post("/login", loginUser);
router.post("/insertMessage", insertMessage);

//Route For Cart 
router.post("/addToCart", addToCart);
router.get("/getAllCartItems", getAllCartItems);
router.post("/removeCartItem", removeCartItem);
 
router.post("/createOrder",type, createOrder);
 
module.exports = router;