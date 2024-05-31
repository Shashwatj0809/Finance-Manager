const express=require("express");
const router=express.Router();
const{saveDetails}=require('../controller/TrackerController');
const{addDetails}=require ("../controller/TrackerController");
const{loginPage}=require("../controller/TrackerController")
const{signupPage}=require("../controller/TrackerController")
const{getDetails}=require("../controller/TrackerController")

router.post("/",saveDetails);
router.get('/',addDetails);
router.post('/login',loginPage);
router.get('/signup',getDetails);
router.post('/signup',signupPage);

module.exports=router;