
const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;
const hosbitalschema = new Schema({
    email:{type:String},
    password:String,
    hosbital_name:String,
    phone:Number,
    location:String,
    image :String,
    rate : Number,
    Emergency_beds : Number,
    cancer:Number,
    Ear_Nose_Thort:Number,
    kindofhospital:{type:String,enum:["private","public"]},
    IDRequest:{ type: Schema.Types.ObjectId, ref: "request" },
   

},{
    timeStamps:true,
})

module.exports = hosbitalschema;