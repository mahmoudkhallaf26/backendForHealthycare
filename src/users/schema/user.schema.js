
const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;
const userschema = new Schema({
    email:{type:String},
    password:String,
    first_name:String,
    last_name:String,
    age:Number,
    national_number:Number,
    location:String,
    role:{type:String,enum:["user","admin","suberadmin"]},
    
    

    

},{
    timeStamps:true,
})



module.exports = userschema;