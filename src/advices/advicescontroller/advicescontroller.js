const advices = require("../advicesmodel/advicesmodel");

const getAlladvices = async(req,res)=>
{
    try {
        const data=  await advices.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}


const addadvicesHander = async (req,res)=>{
  
   
        const {email,hosbital_name,phone,password,location,image,rate,special,cancer,Ear_Nose_Thort,kindofhospital}= req.body;
        const advice= await advices.save()
        res.json({message:"success",data})
       
        
        
   
    
}
module.exports =
{
    getAlladvices,
    addadvicesHander,
    
}