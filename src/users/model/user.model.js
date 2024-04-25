const mongoose = require("mongoose");
const userschema = require("../schema/user.schema");


const user = mongoose.model("user",userschema)

module.exports = user;