const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const requestbloodbank = require("../model/requestblood.model");




const getAllrequestbloodHandler = async(req,res)=>
{
    try {
        const data=  await requestbloodbank.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}


const addrequestbloodHander = async (req,res)=>{
  
   
        const {bloodbank_name,phone,address,national_id,age, kind_of_blood,kind}= req.body;
       
       
        const newrequest = new requestbloodbank({bloodbank_name,phone,address,national_id,age,kind_of_blood,kind})
        const data = await newrequest.save()
         res.json({message:"success",data})
           
    
    
}


module.exports ={
    getAllrequestbloodHandler,
    addrequestbloodHander,

}