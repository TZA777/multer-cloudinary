// =======================
// LISTING MODEL
// =======================

const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: String,

    // store only cloudinary data (not actual file)
    image: {
        url: String,       // cloudinary URL
        filename: String   // cloudinary file ID
    }
});

module.exports = mongoose.model("Listing", listingSchema);