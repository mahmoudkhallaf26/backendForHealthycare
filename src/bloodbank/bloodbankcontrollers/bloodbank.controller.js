const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const requestbloodbank = require("../../requestblood/model/requestblood.model");

const bloodbank = require("../model/bloodbank.model");



const getAllbloodbankHandler = async(req,res)=>
{
    try {
        const data =  await bloodbank.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}
const addblodbankHander = async (req,res)=>{
  
    try {
        const {email,bloodbank_name,phone,password,location,image,rate,A_positive,A_negative,B_positive, B_negative ,  O_positive , O_negative ,AB_positive ,AB_negative,kind
        }= req.body;
        const bloodbank1= await bloodbank.findOne({email})
       
         if(bloodbank1)
         {res.json({message:"email is ready exist"})}
       
         else{
       
            bcrypt.hash(password, 7, async function(err,hash) {
                if(err) throw new Error(err)
                const newbloodbank = new bloodbank({email,bloodbank_name,phone,password:hash,location,image,rate,A_positive,A_negative,B_positive, B_negative ,  O_positive , O_negative ,AB_positive ,AB_negative,kind})
                const data = await newbloodbank.save()
               res.json({message:"success",data})
            });
      }} 
        catch (error) {
        res.json({massage:"error",error})
        
    }
    
}
const getpostsbyname = async(req,res)=>{

    const bloodbank_name =req.params.bloodbankname;
    console.log(bloodbank_name)
    const bloodbank = await requestbloodbank.find({bloodbank_name})


        res.json({massage:"bloodbank",bloodbank})

}
const signinbloodbankhandeler = async (req,res)=>{
    const {email,password} = req.body;

    try {
        const Bloodbank = await bloodbank.findOne({email})
        if(!Bloodbank)
        {
           res.json({message:"the email not match"})
        }
        else{
            const match = await bcrypt.compare(password, Bloodbank.password);

            if(match)
            {


                var token = jwt.sign({ _id:Bloodbank._id,bloodbank_name:Bloodbank.bloodbank_name }, process.env.secret_key);
                const data = await bloodbank.findOne({email}).select("-password")
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


module.exports =
{
    addblodbankHander,
    getAllbloodbankHandler,
    getpostsbyname,
    signinbloodbankhandeler

}