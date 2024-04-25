const express = require('express');
var cors = require('cors')

const dbconnection = require('./config/config.db');
const app = express()
const request = require('./src/request/requestroutes/request.routes')
const bloodbank = require('./src/bloodbank/bloodbankroutes/bloodbank.routes')
const userrouter = require('./src/users/userroutes/user.routes')
const hosbitalrouter = require('./src/hosbital/hosbitalroutes/hosbital.routes')
const advices = require('./src/advices/advicesroutes/advicesroutes')
const requestbloodbank = require('./src/requestblood/requestbloodroutes/requestblood.routes')

require('dotenv').config();
const port =  process.env.port || 5000

app.use(express.json());
app.use(cors())
dbconnection()
app.use(request);
app.use(userrouter);
app.use(hosbitalrouter);
app.use(bloodbank);
app.use(advices);
app.use(requestbloodbank);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))