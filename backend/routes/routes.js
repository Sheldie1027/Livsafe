const { response } = require('express')
const express = require('express')
const router = express.Router()
const livsafeTemplateCopy = require('../models/RegisterModels')

router.post('/login', (request, response) =>{
    const signedUpUser = new livsafeTemplateCopy({
        username:request.body.username,
        email:request.body.email,
        mobile:request.body.mobile,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router