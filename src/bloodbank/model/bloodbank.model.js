const mongoose = require("mongoose");
const bloodbankschema = require("../schema/schema");




const bloodbank = mongoose.model("bloodbank",bloodbankschema)

module.exports = bloodbank;