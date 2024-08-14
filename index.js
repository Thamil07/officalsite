const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require("./routers/user_router")
const productRouter = require("./routers/product_router")
const {connectDB, PORT} = require("./config/config")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/auth",userRouter)
app.use("/api/product", productRouter)

connectDB()
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})