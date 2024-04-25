const mongoose = require('mongoose');
const dbconnection = ()=> mongoose.connect(process.env.MONGO_CONNECTION).then((result)=>{
        
       console.log("dbconnected");

    })
    .catch((err)=>{
        console.log(err)
    })

    module.exports = dbconnection
