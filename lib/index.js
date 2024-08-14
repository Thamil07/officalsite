const cryptJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const {PUBLIC_KEY, JSON_PRIVATE_KEY} = require("../config/config")

exports.encryptData = (value) =>{
    const hashedValue = cryptJS.AES.encrypt(value, PUBLIC_KEY)
    return hashedValue
}

exports.decryptData = (value) =>{
    const bytes = cryptJS.AES.decrypt(value, PUBLIC_KEY);
    return bytes.toString(cryptJS.enc.Utf8);

}

exports.getToken = (id) =>{
    const token = jwt.sign({id}, JSON_PRIVATE_KEY, {expiresIn: "30m"})
    return token
}