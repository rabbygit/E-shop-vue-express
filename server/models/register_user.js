const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : [true , 'Email is required'],
        match : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    username : {
        type : String,
        required : true
    },
    phonenumber : {
        type : String,
        required : [true , 'User phone number required'],
        validate: {
            validator: function(v) {
                return /(^(\+88|0088)?(01){1}[56789]{1}(\d){8})$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('RegisterUser' , userSchema );