  const express=require('express')
  const User = require('../models/user_model')
  const {encryptData, decryptData, getToken} = require("../lib")

  class UserController {
    async register(req, res) {
        try {
            const { role, name,pic,email, password } = req.body;

            // Ensure the fields exist
            if (!role || !email  || !name || !pic || !password) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const exist = await User.findOne({ email: email });
            if (exist) return res.status(400).send("User already exists!");

            const new_user = await User.create({
                role,
                name,
                pic,
                email,
                password : encryptData(password)
            });
            return res.status(201).json(new_user);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    async login(req, res) {
      try {
        const {email, password } = req.body;
        const user = await User.findOne({email})
        if(!user) return res.status(400).send("Invalid username!")
        if(decryptData(user.password) === password)
          {
            const token=getToken(user.id);
            const user_name=user.name;
            return res.status(200).json({message:"Login successful",token,user_name})
        }else{
          return res.status(401).send("Invalid password");
        }
      } catch (err) {
        console.log(err)
        return res.status(500).send("Internal server error!");
      }
    }
    async get_user_count(req,res){
      try{
        const user_count=await User.countDocuments();
        return res.status(200).json({count:user_count})
        
      }catch(err){
       return res.status(500).send("Failed to count user_count")
      }
    }
    async get_user(req,res){
      try{
        const users=await User.find();
        return res.status(200).json(users)
      }catch(err){
              return res.status(500).send("Failed to get user details")
      }
    }
    async logout(req, res) {
      return res.status(200).send("Logged out");
    }
  }


  module.exports = UserController;
