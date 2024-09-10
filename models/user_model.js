const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    role: {type: String,required: true },
    name: {type: String,required: true },
    pic: {type: String,required: true ,default:"https://webdosolutions.net/wp-content/uploads/2023/09/user-icon-2048x2048-ihoxz4vq-1024x1024.png"},
    email: {type: String, required: true ,match: /.+\@.+\..+/},
    password: {type: String, required: true}
    
})

const User = mongoose.model("User", user_schema)
module.exports = User;