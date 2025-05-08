const { categoryModel } = require("../../models/categoryModels")

let categoryInsert=async (req,res)=>{

     let {categoryName,order}=req.body
    console.log(req.file)
    let obj={
        categoryName,
        categoryOrder:order,
        categoryStatus:true
    }

    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!='' && req.file.filename!=null){
            obj['categoryImage']=req.file.filename

        }
    }

    
    let category=await categoryModel(obj)
    let catRes=await category.save()
     res.send({
         status:1,
         msg:"Category Save",
         catRes
     })
 }

 module.exports={categoryInsert}