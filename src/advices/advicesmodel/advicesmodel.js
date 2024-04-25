const mongoose = require("mongoose");
const advicesschema = require("../advicesschema/advicesschema");




const advices = mongoose.model("advices",advicesschema)

module.exports = advices;
