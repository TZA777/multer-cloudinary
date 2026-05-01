// =======================
// CLOUDINARY CONFIG
// =======================

const cloudinary = require("cloudinary");
const CloudinaryStorage = require("multer-storage-cloudinary");

// load environment variables
require("dotenv").config();

// configure cloudinary using .env values
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// define storage engine for multer
// 👉 this tells multer: "store file directly in cloudinary"
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "listings",             // folder name in cloudinary
        allowed_formats: ["jpg", "png", "jpeg"]
    }
});

// export both
module.exports = {
    cloudinary,
    storage
};