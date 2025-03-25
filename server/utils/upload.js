import multer from 'multer';
import fs from 'fs';
import path from 'path';


const uploadsDir = 'uploads';

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);  
  },
  filename: (req, file, cb) => {
    // Add timestamp to the filename to avoid conflicts
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});


const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, and PDF files are allowed.'));
  }
};

// Configure Multer with storage, fileFilter, and limits
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024  // Max file size 10MB
  }
});

export default upload;
