const {StatusCodes} = require("http-status-code")

module.exports = (schema)=>{
    return (req,res,next)=>{
        const validationarr = [];
        const validationresult = schema.body.validate(req.body)
        if(validationresult.error)
        {
            validationarr.push(validationresult.error.details[0].massage)
        }
        if(validationarr.length)
        {
            res.json({massage:"erorr", data:validationarr.join()})
        }
        else{
            next();
        }
    }
}