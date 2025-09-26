const cloudinary = require("cloudinary").v2;

// Configure the cloudinary by env data
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMediaToCloudinary = async (filePath) => {
  try {
    const reuslt = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    return reuslt;
  } catch (error) {
    console.log(error);
    throw new Error("Error uploading to cloudinary!");
  }
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("Error to delete assest from cloudinary!!");
  }
};


module.exports = {
    uploadMediaToCloudinary,
    deleteMediaFromCloudinary
}
