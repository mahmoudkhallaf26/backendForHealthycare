const user = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const getAllUserHandler =async (req,res)=>{
  
    
    try {
        const data=  await user.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }

}

const getuserbyidp = async (req,res)=>{

    const _id = req.params;


    try {
        
        const data=  await user.find({_id});
        res.json({massage:"success",data})
        
    } catch (error) {
        res.json({massage:"error",error})
        
    }
}

const addUserHander = async (req,res)=>{
  
    try {
        const {email,first_name,last_name,age,password,national_number,location,role}= req.body;
        const user1= await user.findOne({email})
         if(user1)
         {res.json({message:"email is ready exist"})}
       
         else{
       
            bcrypt.hash(password, 7, async function(err,hash) {
                if(err) throw new Error(err)
                const newUser = new user({email,first_name,last_name,age,password:hash,national_number,location,role})
                const data = await newUser.save()
               res.json({message:"success",data})
            });
      }} 
        catch (error) {
        res.json({massage:"error",error})
        
    }
    
}
const signinhandeler = async (req,res)=>{
    const {email,password} = req.body;
    
    try {
        const User = await user.findOne({email})
        if(!User)
        {
           res.json({message:"the email not match"})
        }
        else{
            const match = await bcrypt.compare(password, User.password);
            
            if(match)
            {
               
               
                var token = jwt.sign({ _id:User._id,first_name:User.first_name }, process.env.secret_key);
                const data = await user.findOne({email}).select("-password")
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
const deleteUserHandeler = async(req,res)=>{
    const {email} = req.body;

    try {
        const  datadeleted = await user.deleteOne({email})
        res.json({massage:"deleted",datadeleted})
    } catch (error) {
        res.json({massage:"not deleted",error})
    }
}

const updateUserHandler = async(req,res)=>{
    const {email,first_name,last_name,age}= req.body;
    const newUser = await user.updateOne({email},{"$set":{first_name,last_name,age,password}})
    res.json({massage:"success update",newUser})
}
module.exports = {
    getAllUserHandler,
    addUserHander,
    deleteUserHandeler,
    updateUserHandler,
    getuserbyidp,
    signinhandeler
}

function newFunction() {
    return require("../model/user.model");
}
