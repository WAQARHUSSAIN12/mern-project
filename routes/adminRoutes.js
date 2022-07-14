const express = require("express");
const 
{
  registerView,
  loginView,
  registerUser,
  loginUser,
  getUsers,
  insertUser,
  insertCategory,
  insertProduct,
  getProduct,
} = require("../controllers/CategoryController");
const { dashboardView } = require("../controllers/DashboardController");
// const { protectRoute } = require("../auth/protect");
const router = express.Router();
router.get("/admin/getusers",getUsers);
router.get("/admin/createUser",insertUser);
router.get("/admin/register", registerView);
router.get("/admin/login", loginView);
router.get("/admin/createCategory",insertCategory); 
router.get("/admin/createProduct",insertProduct); 
router.get("/admin/getProduct",getProduct); 
// Dashboard
router.get("/admin/dashboard", dashboardView);

//post route 
router.post("/admin/register", registerUser);
router.post("/admin/login", loginUser);

module.exports = router;