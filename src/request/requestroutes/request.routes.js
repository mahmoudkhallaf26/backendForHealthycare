const { addhosbitalHander, getAllrequestHandler, 
    addrequestHander } = require('../requestcontroller/request.controller')



const router = require('express').Router()
router.get('/request',getAllrequestHandler)
router.post('/request',addrequestHander)

module.exports = router