const mongoose = require("mongoose");
const requestbloodSchema = require("../schema/requestblood.schema")


const requestbloodbank = mongoose.model("requestbloodbank",requestbloodSchema)
module.exports = requestbloodbank;