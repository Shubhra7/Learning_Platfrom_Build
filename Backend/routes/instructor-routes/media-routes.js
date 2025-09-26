const express = require("express");
const multer = require("multer");
const fs = require('fs')

const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

// configure multer to it's destination
const upload = multer({ dest: "uploads/" });


// For uploading in cloudinary
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    
    const result = await uploadMediaToCloudinary(req.file.path);

     // delete the file from uploads/ after upload
     fs.unlink(req.file.path,(err)=>{
        if(err) console.error("Error deleting local file:",err);
     })

    res.status(200).json({
      success: true,
      data: result,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error uploading file!" });
  }
});

// For deleting from cloudinary
router.delete("/delete/:id", async (req, res) => {
  try {

    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            success: false,
            message: 'Assest Id is required!!'
        })
    }

    await deleteMediaFromCloudinary(id)
    res.status(200).json({
      success: true,
      message: 'Assest deleted successfully from cloudinary.'
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleteing file!" });
  }
});

module.exports = router;
