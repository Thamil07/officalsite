const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require("./routers/user_router")
const productRouter = require("./routers/product_router")

const app = express()
const port = 8888

app.use(cors())
app.use(bodyParser.json())

app.use("/api/auth",userRouter)
app.use("/api/product", productRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})