const dotenv = require('dotenv')
// dot env config
dotenv.config()

// =======================
// MAIN APP
// =======================

const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); 

const PORT = process.env.PORT || 3000;

// ejs mate
const engine = require("ejs-mate");

const listingRoutes = require("./routes/listingRoutes");

const app = express();

// ---------------- DB ----------------
mongoose.connect(process.env.MONGO_ATLAS_URL)
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));

// ---------------- VIEW ----------------
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------- MIDDLEWARE ----------------
app.use(express.urlencoded({ extended: true }));

// ---------------- ROUTES ----------------
app.use("/listings", listingRoutes);

// ---------------- SERVER ----------------
app.use((err, req, res, next) => {
    console.error("ERROR CAUGHT:", err);
    res.status(500).send(`Something broke! ${err.message}`);
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});