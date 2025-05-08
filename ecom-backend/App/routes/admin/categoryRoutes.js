let express=require("express")
let path=require("path")
const multer = require('multer');
const { categoryInsert } = require("../../controllers/admin/categoryController")
let categoryRoutes=express.Router()

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/category")
    }, //Upload
    filename: function (req, file, cb) { //return d 
      cb(null, Date.now()+file.originalname);
    }
  });
  
  
  const upload = multer({ storage:storage })
// categoryRoutes.get('/view',categoryView)

categoryRoutes.post('/insert',upload.single('categoryImage'),categoryInsert)

// categoryRoutes.delete('/delete',categoryDelete)

module.exports={categoryRoutes}