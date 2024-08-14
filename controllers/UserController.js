const User = require('../models/user_model')
const {encryptData, decryptData, getToken} = require("../lib")

class UserController {
  async register(req, res){
    try{
      const {name, username, password} = req.body
      const exist = await User.findOne({username: username})
      if(exist) return res.status(400).send("User already exists!")
      const new_user = await User.create({
        name: name,
        username,
        password : encryptData(password)
      })
      if(!new_user) return res.status(400).json("Invalid data")
      return res.status(201).json(new_user)
    }catch(err){
      return res.status(500).json(err)
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({username})
      if(!user) return res.status(400).send("Invalid username!")
      if(decryptData(user.password) == password){
        return res.status(200).send(getToken(user.id))
      }else{
        return res.status(401).send("Invalid password");
      }
    } catch (err) {
      console.log(err)
      return res.status(500).send("Internal server error!");
    }
  }
  async logout(req, res) {
    return res.status(200).send("Logged out");
  }
}

module.exports = UserController;
