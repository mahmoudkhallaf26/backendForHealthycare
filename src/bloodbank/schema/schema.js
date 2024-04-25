const  Mongoose  = require("mongoose");

const { Schema } = Mongoose;
const bloodbankschema = new Schema({
    
    email:{type:String},
    password:String,
    bloodbank_name:String,
    phone:Number,
    location:String,
    image :String,
    rate : Number,
    A_positive : Number,
    A_negative : Number,
    B_positive : Number,
    B_negative : Number,
    O_positive : Number,
    O_negative : Number,
    AB_positive : Number,
    AB_negative : Number,
    kind:String,
    IDRequestblood:{ type: Schema.Types.ObjectId, ref: "requestbloodbank" },

 
    
    

    

},{
    timeStamps:true,
})



module.exports =bloodbankschema ;