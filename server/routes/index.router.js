const express = require('express');
var multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/');
        const fileType = mimeType[1];
        const fileName = file.originalname + '.' + fileType;
        cb(null, fileName)
    }
})

const fileFilter = (req, file, cb) => {
    const allowType = ["image/png", "image/jpeg", "image/jpg"];
    allowType.includes(file.mimetype) ? cb(null, true) : cb(null, false);
}


const storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single('image')

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.put('/userUpdate', jwtHelper.verifyJwtToken, ctrlUser.update)


router.put('/userImage', jwtHelper.verifyJwtToken, storage, (req, res) => {
    console.log(req.file.filename);
    const image = `http://localhost:3000/images/${req.file.filename}`
    console.log(image);
    User.findByIdAndUpdate({ _id: req._id }, { img: image }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(result)
        }
    })
})


module.exports = router;