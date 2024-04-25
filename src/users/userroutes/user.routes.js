const validaterequest = require('../../../common/validaterequest')
const { adduserschema, siginchema } = require('../../joi/uservalidation')
const { getAllUserHandler, addUserHander, deleteUserHandeler, updateUserHandler, getuserbyidp, signinhandeler } = require('../usercontroller/user.controller')

const router = require('express').Router()

router.get('/users',getAllUserHandler)

router.post('/users',validaterequest(adduserschema),addUserHander)
router.post('/signin',validaterequest(siginchema),(signinhandeler))
router.delete('/users',deleteUserHandeler)
router.put('/users',updateUserHandler)
router.get('/_id/users',getuserbyidp)
module.exports = router