const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname : {
        type : String,
        required : true
    },
    productId:{
        type:Number,
        required:true
    },
    image :{
        type : String,
        required: true
    },
    catagories: {
        type : String,
        required : true,
    },
    details : {
        type : String,
        required : true
    },
    availability : {
        type : String,
        required : true,
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product' , productSchema );