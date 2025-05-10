const { categoryModel } = require("../../models/categoryModels")


let parentCategory=async (req,res)=>{
    let categoryList=await categoryModel.find({categoryStatus:true}).select('categoryName')
    let obj={
        status:1,
        categoryList
    }
    res.send(obj)
}

module.exports={parentCategory}