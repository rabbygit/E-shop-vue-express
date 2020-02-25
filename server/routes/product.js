var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var path = require('path');
var bodyParser = require('body-parser');

var Product = require('../models/product');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const AWS_ACCESS_KEY = require('../config/keys').AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = require('../config/keys').AWS_SECRET_ACCESS_KEY;
const REGION = require('../config/keys').REGION;
const BUCKET = require('../config/keys').BUCKET;


// const storage = multer.diskStorage({
//   destination: './public/images/',
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname),
//     );
//   },
// });
// function checkFileType(file, cb) {
//   const fileType = /jpeg|jpg|png/;
//   const extname = fileType.test(
//     path.extname(file.originalname).toLocaleLowerCase(),
//   );
//   const mimetype = fileType.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single('file');

const s3 = new aws.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: REGION
})

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype); if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}
const profileImgUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  limits: { fileSize: 5000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('file');

//Add a product by admin
router.post('/addProduct', function (req, res) {

  profileImgUpload(req, res, err => {
    if (err) {
      console.log(err)
      return res.json({
        success: false,
        msg: 'Something went wrong',
      });
    } else {
      if (req.file == undefined) {
        return res.json({
          success: false,
          msg: 'No file selected',
        });
      } else {
        filename = req.file.key;
        const product = new Product({
          productname: req.body.productname,
          details: req.body.details,
          productId: req.body.productId,
          image: filename,
          catagories: req.body.catagory,
          availability: req.body.availability,
          brand: req.body.brand,
          price: req.body.price,
        });
        product.save();
        return res.status(200).json({
          success: true,
          msg: 'Successfully saved a post',
        });
      }
    }
  });
});

//Get all Products(Public)
router.get('/getProducts', function (req, res) {
  Product.find((err, data) => {
    if (err) {
      return res.status(404).send({
        success: false,
        message: 'Something went wrong with getting products!',
      });
    } else {
      return res.status(200).send(data);
    }
  });
});

router.get('/deleteProduct/:_id', function (req, res) {
  console.log('hello');
  console.log(req.params._id);
  Product.findByIdAndRemove({ _id: req.params._id }, (err, data) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: 'Product is not deleted',
      });
    } else {
      console.log(data);
      return res.status(200).json({
        product: data,
        success: true,
        message: 'Succeesfully deleted',
      });
    }
  });
});

//update a product
router.put('/updateProduct', function (req, res, next) {
  let data = {};
  data.productname = req.body.productname;
  data.productId = req.body.productId;
  data.catagory = req.body.catagory;
  data.details = req.body.details;
  data.availability = req.body.availability;
  data.brand = req.body.brand;
  data.price = req.body.price;

  let id = req.body._id;
  console.log(data);
  console.log('id: ' + req.body._id);

  let options = { new: true };
  Product.findByIdAndUpdate(id, data, options).then(pro => {
    if (!pro) {
      return res.status(404).json({
        success: false,
        message: 'unsuccessful',
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'Updated successfully',
        updatedProduct: pro,
      });
    }
  });
});

router.put('/updateProductandImage', function (req, res, next) {
  upload(req, res, err => {
    if (err) {
      return res.json({
        success: false,
        msg: 'Something went wrong',
      });
    } else {
      if (req.file == undefined) {
        return res.json({
          success: false,
          msg: 'No file selected',
        });
      } else {
        filename = req.file.filename;
        let data = {};
        data.productname = req.body.productname;
        data.productId = req.body.productId;
        data.catagory = req.body.catagory;
        data.details = req.body.details;
        data.availability = req.body.availability;
        data.brand = req.body.brand;
        data.price = req.body.price;
        data.image = filename;

        let id = req.body._id;
        let options = { new: true };
        console.log(data);
        console.log('id: ' + req.body._id);

        Product.findByIdAndUpdate(id, data, options).then(pro => {
          if (!pro) {
            console.log('unsuccessful');
            return res.status(404).json({
              success: false,
              message: 'unsuccessful',
            });
          } else {
            return res.status(200).json({
              success: true,
              message: 'Updated successfully',
              updatedProduct: pro,
            });
          }
        });
      }
    }
  });
});

module.exports = router;
