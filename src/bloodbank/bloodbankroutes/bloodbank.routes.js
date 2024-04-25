const { getAllbloodbankHandler, addblodbankHander, getpostsbyname, signinbloodbankhandeler } = require('../bloodbankcontrollers/bloodbank.controller')

const router = require('express').Router()


router.post('/bloodbank',addblodbankHander)
router.get('/bloodbank',getAllbloodbankHandler)
router.get('/bloodbankreq/:bloodbankname?',getpostsbyname)
router.post('/loginbloodbank',signinbloodbankhandeler)

module.exports = router