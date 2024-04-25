const mongoose = require("mongoose");
const hosbitalschema = require("../schema/hosbital.schema");



const hosbital = mongoose.model("hosbital",hosbitalschema)

module.exports = hosbital;

