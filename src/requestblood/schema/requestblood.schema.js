
const { string } = require("joi");
const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;
const requestbloodSchema = new Schema({

    name : String,
    age : Number,
    national_id : Number,
    phone : Number,
    address : String,
    bloodbank_name:String,
    kind_of_blood:String,
    kind:String,
    
    IDbloodbank:{ type: Schema.Types.ObjectId, ref: "bloodbank" }
   
},{
    timestamps:true,
})

module.exports = requestbloodSchema;