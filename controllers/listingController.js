// =======================
// LISTING CONTROLLER
// =======================

const Listing = require("../models/listing");

// -----------------------
// CREATE LISTING
// -----------------------
module.exports.createListing = async (req, res) => {
    // req.file comes from multer
    // since we used cloudinary storage,
    // file is already uploaded to cloudinary

    const file = req.file;

    // create new listing
    const newListing = new Listing({
        title: req.body.title,

        image: {
            url: file.secure_url,        // cloudinary URL
            filename: file.filename // unique id in cloudinary
        }
    });

    await newListing.save();

    res.redirect(`/listings/${newListing._id}`);
};

// -----------------------
// SHOW LISTING
// -----------------------
module.exports.showListing = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    console.log(listing);
    res.render("listings/show", { listing });
};

// -----------------------
// RENDER FORM
// -----------------------
module.exports.renderForm = (req, res) => {
    res.render("listings/new");
};