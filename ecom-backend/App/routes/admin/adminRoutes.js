let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { sizeRoutes } = require("./sizeRoutes")
const { materialRoutes } = require("./materialRoutes")

let adminRoutes=express.Router()

adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/size",sizeRoutes)
adminRoutes.use("/material",materialRoutes)
module.exports={adminRoutes}