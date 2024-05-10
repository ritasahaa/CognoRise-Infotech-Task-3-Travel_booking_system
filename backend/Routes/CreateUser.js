// // second step where a create functionality is introduced and user schema is imported------

// const express=require('express');
// const router=express.Router();
// const User=require("../models/User");
// const { body, validationResult } = require('express-validator');



// router.post("/createuser",[
// body('email',"incorrect email").isEmail(),
// body('name').isLength({min: 5}),
// body('password','incorrect password').isLength({min: 5})]
// ,async(req,res)=>{
//      console.log(req)
//      const errors=validationResult(req);
//      if(!errors.isEmpty()){
//        return res.status(400).json({errors: errors.array()});
//      }

//      try{
//          User.create({
//             name:req.body.name,
//             password:req.body.password,
//             email:req.body.email,
//             location:req.body.location
//          })
//          res.json({success:true})
//      }
//      catch(error){
//         console.log(error);
//         res.status(500).json({ success: false, error: 'Server error' });
//      }
// })

// router.post("/login",[
//    body("email").isEmail(),
//    body('password','incorrect password').isLength({min: 5})],

//    async(req,res)=>{
//    let email=req.body.email;
//    const errors=validationResult(req);
//      if(!errors.isEmpty()){
//        return res.status(400).json({errors: errors.array()});
//      }

//      try{
//          let userData=await User.findOne({email});
//          if(!userData){
//             return res.status(400).json({errors:"Try logging  with correct credentials"});
//          }   
//          if (req.body.password!==userData.password){
//             return res.status(400).json({errors:"Try logging  with correct credentials"});
//          }
//          return res.json({success:true})
//      }
//      catch(error){
//         console.log(error);
//         res.status(500).json({ success: false, error: 'Server error' });
//      }
//      console.log(userData);
// })

// module.exports=router;

const express = require("express");
require("../db");
const ProductSchema = require("../models/User");

const productApi = express();

productApi.post("/api/createuser", async (req, res) => {
   console.log(req)
   try {
 
     // Create a new post document with the image URL
     const newCake = new ProductSchema({
       // productType: req.body.productType,
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       location: req.body.location,
     });
     await newCake.save();
     // console.log(newCake);
     res.status(200).json({ mess: "done" });
     // console.log(fileStr);
   } catch (error) {
     // console.log(error);
     res.status(500).json({ mess: "failed" });
   }
 });
 
 module.exports=productApi;