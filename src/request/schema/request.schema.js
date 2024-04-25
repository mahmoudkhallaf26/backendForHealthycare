const { string } = require("joi");
const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;
const requestSchema = new Schema({

    name : String,
    age : Number,
    national_id : Number,
    phone : Number,
    address : String,
    hosbital_name:String,
    speciality:String,
    description:String,
    IDhosbital:{ type: Schema.Types.ObjectId, ref: "hosbital" }
   
},{
    timestamps:true,
})

module.exports = requestSchema;