let express=require("express")
const mongoose = require('mongoose');
let cors=require("cors")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
require("dotenv").config()
let app=express()

app.use(cors())
app.use(express.json())

app.use("/uploads/category",express.static("uploads/category")) //Allow Frontend Folder Access
app.use("/uploads/product",express.static("uploads/product")) //Allow Frontend Folder Access
app.use("/uploads/slider",express.static("uploads/slider")) //Allow Frontend Folder Access

app.use("/admin",adminRoutes)




mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT)
    })  //http://localhost:8120/admin/color/view
})


