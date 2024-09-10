const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer=require('multer')
const path=require("path")
const userRouter = require("./routers/user_router")
const productRouter = require("./routers/product_router")
const {connectDB, PORT} = require("./config/config")

const app = express()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "upload"));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + `${Date.now()}` + "product" + ".png");
    },
  });
  const upload = multer({ storage: storage });
  //Making uploads as static folder so that we can assess it with lostmame and filename.
  app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.use("/api/auth",userRouter)
app.use("/api/product", productRouter)

//For upload an image to the static folder API.
app.post("/api/upload", upload.single("file"), async (req, res) => {
  const fileUrl = `${req.protocol}://${req.get("host")}/upload/${
    req.file.filename
  }`;
  return res.status(200).send(fileUrl);
});


connectDB()
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})