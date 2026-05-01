Multer → handles file upload
Cloudinary → stores image in cloud

STEP1: INSTALL DEPENDENCIES
npm install express mongoose multer cloudinary multer-storage-cloudinary ejs ejs-mate dotenv

STEP 2: Project Structure

image-upload/
│
├── models/
│   └── listing.js
├── routes/
│   └── listingRoutes.js
├── controllers/
│   └── listingController.js
├── config/
│   └── cloudinary.js
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── new.ejs
│       └── show.ejs
├── .env
├── app.js


STEP 3: Add Cloudinary Credentials (.env)

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

STEP 4: Cloudinary Config (config/cloudinary.js)

STEP 5: Model (models/listing.js)

STEP 6: Controller (controllers/listingController.js)

STEP 7: Routes (routes/listingRoutes.js)

STEP 8: Views

Layout → boilerplate.ejs

Form → new.ejs

Show → show.ejs

STEP 9: Main App (app.js)


FINAL FLOW (VERY IMPORTANT)
User selects image
   ↓
Form sends multipart/form-data
   ↓
Multer receives file
   ↓
CloudinaryStorage uploads to Cloudinary
   ↓
Returns URL + filename
   ↓
Controller saves URL in MongoDB
   ↓
EJS displays image using URL


Common Mistakes
❌ Missing enctype="multipart/form-data"
❌ Input name ≠ upload.single("image")
❌ Not using Cloudinary storage
❌ Forgetting .env