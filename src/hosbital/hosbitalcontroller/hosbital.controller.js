
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const request = require("../../request/model/request.model");

const hosbital = require("../model/hosbital.model");


const getAllhosbitalHandler = async(req,res)=>
{
    try {
        const data=  await hosbital.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}


const addhosbitalHander = async (req,res)=>{
  
    try {
        const {email,hosbital_name,phone,password,location,image,rate,special,cancer,Ear_Nose_Thort,kindofhospital}= req.body;
        const hosbital1= await hosbital.findOne({email})
       
         if(hosbital1)
         {res.json({message:"email is ready exist"})}
       
         else{
       
            bcrypt.hash(password, 7, async function(err,hash) {
                if(err) throw new Error(err)
                const newhosbital = new hosbital({email,hosbital_name,phone,password:hash,location,image,rate,special,cancer,Ear_Nose_Thort,kindofhospital})
                const data = await newhosbital.save()
               res.json({message:"success",data})
            });
      }} 
        catch (error) {
        res.json({massage:"error",error})
        
    }
    
}

const signinHosbitalhandeler = async (req,res)=>{
    const {email,password} = req.body;
    
    try {
        const Hosbital = await hosbital.findOne({email})
        if(!Hosbital)
        {
           res.json({message:"the email not match"})
        }
        else{
            const match = await bcrypt.compare(password, Hosbital.password);
            
            if(match)
            {
               
               
                var token = jwt.sign({ _id:Hosbital._id,first_name:Hosbital.hosbital_name }, process.env.secret_key);
                const data = await hosbital.findOne({email}).select("-password")
                console.log(token)
 
               res.json({message:"login success",token,data})
            }
            else{
                res.json({message:"the password not match"})
            }
        }
    } catch (error) {
        res.json({massage:"error",error})
    } 
}

const updateHospitalHandler = async(req,res)=>{
    const {email,Emergency_beds,rate}= req.body;
    const newHosbital = await hosbital.updateOne({email},{"$set":{Emergency_beds,rate,Ear_Nose_Thort,cancer}})
    res.json({massage:"success update",newHosbital})
}
const getpostsbyname = async(req,res)=>{

    const hosbital_name =req.params.hospitalname;
    console.log(hosbital_name)
    const hospital = await request.find({hosbital_name})
    
    
    res.json({message:"success",hospital})
    


}


module.exports =
{
    updateHospitalHandler,
    signinHosbitalhandeler,
    addhosbitalHander,
    getAllhosbitalHandler,
    getpostsbyname,
}