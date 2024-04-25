const validaterequest = require('../../../common/validaterequest')
const { getAllhosbitalHandler, addhosbitalHander, signinHosbitalhandeler,
     updateHospitalHandler, getpostsbyname } = require('../hosbitalcontroller/hosbital.controller')

const router = require('express').Router()

router.get('/hosbital',getAllhosbitalHandler)
router.post('/hosbital',addhosbitalHander)
router.post('/login',signinHosbitalhandeler)
router.put('/hosbital',updateHospitalHandler)
router.get('/hosbitalreq/:hospitalname?',getpostsbyname)
module.exports = router