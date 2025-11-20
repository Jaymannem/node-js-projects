const Image = require("../models/image");
const uploadToCloudinary = require("../helpers/cloudinary-helper");
const fs = require("fs")

const uploadImageController = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({
        success: false,
        message: "File is required, please upload an image.",
      });
    }

    // upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(file.path);

    // store the image url and public_id
    const createImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });

    await createImage.save();

    // delete the image from local 
    fs.unlinkSync(req.file.path)

    res.status(201).json({
        success: true, 
        message: "Image uploaded successfully!",
        image: createImage
    })

  } catch (error) {
    console.log("Error in upload image", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!, Please try again.",
    });
  }
};

async function fetchImagesController(req, res) {
  try {
    const images = await Image.find({});
    if(!images) {
      res.status(400).json({
        success: false, 
        message: "Unable to fetch the images"
      })
    }

    res.status(200).json({
      success: true, 
      message: "Images fetched successfully!",
      data: images
    })
  } catch(error) {
    console.log(error);
    res.status(500).json({
      success: false, 
      message: "Something went wrong! Please try again"
    })
  }
}

module.exports = { uploadImageController, fetchImagesController };
