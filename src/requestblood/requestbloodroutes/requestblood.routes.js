const { getAllrequestbloodHandler, addrequestbloodHander } = require('../requestbloodcontroller/requestbloodbank.controller')



const router = require('express').Router()
router.get('/requestbloodbank',getAllrequestbloodHandler)
router.post('/requestbloodbank',addrequestbloodHander)

module.exports = router