const { getAlladvices, addadvicesHander } = require('../advicescontroller/advicescontroller')

const router = require('express').Router()
router.get('/advices',getAlladvices)
router.post('/advices',addadvicesHander)

module.exports=router