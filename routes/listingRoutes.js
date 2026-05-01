// =======================
// ROUTES
// =======================

const express = require("express");
const router = express.Router();

const listingController = require("../controllers/listingController");

// multer setup
const multer = require("multer");
const { storage } = require("../config/cloudinary");

// multer will use cloudinary storage
const upload = multer({ storage });

// -----------------------
// FORM
// -----------------------
router.get("/new", listingController.renderForm);

// -----------------------
// CREATE
// upload.single("image") → matches input name
// -----------------------
router.post("/", upload.single("image"), listingController.createListing);

// -----------------------
// SHOW
// -----------------------
router.get("/:id", listingController.showListing);

module.exports = router;