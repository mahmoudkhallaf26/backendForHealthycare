const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const request = require("../model/request.model");


const getAllrequestHandler = async(req,res)=>
{
    try {
        const data=  await request.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}


const addrequestHander = async (req,res)=>{
  
   
        const {name,hosbital_name,phone,address,national_id,age,speciality,
            description}= req.body;
       
       
        const newrequest = new request({name,hosbital_name,phone,address,national_id,age,speciality,
            description})
        const data = await newrequest.save()
         res.json({message:"success",data})
           
    
    
}


module.exports ={
    getAllrequestHandler,
    addrequestHander,

}