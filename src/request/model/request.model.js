const mongoose = require("mongoose");
const requestSchema = require("../schema/request.schema");


const request = mongoose.model("request",requestSchema)
module.exports = request;