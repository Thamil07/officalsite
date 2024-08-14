const mongoose = require('mongoose')

const user_schema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, default: "user"}
})

const User = mongoose.model("User", user_schema)
module.exports = User;