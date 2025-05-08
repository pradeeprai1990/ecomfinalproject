let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { sizeRoutes } = require("./sizeRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/size",sizeRoutes)
adminRoutes.use("/material",materialRoutes)
adminRoutes.use("/category",categoryRoutes)
module.exports={adminRoutes}