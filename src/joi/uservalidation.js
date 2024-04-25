const joi = require('joi')

module.exports = {
    adduserschema:{
        body:joi.object()
        .required().keys({
            first_name:joi.string().required(),
            last_name:joi.string().required(),
            email: joi.string().required().email().message({"any.required":"custome error"}),
            password:joi.string().required(),
            age:joi.number(),
            national_number:joi.number(),
            location:joi.string(),
            role:joi.string(),
           
        })
    },
    siginchema:{
        body:joi.object()
        .required().keys({
           
            email: joi.string().required().email().message({"any.required":"custome error"}),
           
            password:joi.string().required(),
           
        })
    },
    updateUserschema:{
    
        body:joi.object()
        .required().keys({
            first_name:joi.string().required(),})
    }
}
