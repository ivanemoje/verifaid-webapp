
 
const uploadFiles = (req,res, multer) => {

    const storage =   multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, './uploads');
        },
        filename: function (req, file, callback) {
          callback(null, file.fieldname + '-' + Date.now());
        }
      });
      
    const upload = multer({ storage : storage}).single('userPhoto');
     
    
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
        console.log("File is uploaded")
    });
  }

  module.exports = {
    uploadFiles 
  }

  