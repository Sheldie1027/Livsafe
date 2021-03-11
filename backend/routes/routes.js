const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const userSchemaCopy = require('../models/user')

router.post('/login', async (request, response) =>{
    try {
    const signedUpUser = new userSchemaCopy({
        username:request.body.username,
        email:request.body.email,
        mobile:request.body.mobile,
        password:request.body.password
    })
    const existingUsername = await userSchemaCopy.find({username: username});
    const existingEmail = await userSchemaCopy.find({email: email});
    if (existingUsername){
        return response
            .status(400)
            .json({msg: "An account with this username exists"})
    }
    if (existingEmail)
        return response
            .status(400)
            .json({msg: "An account with this email exists"})
    
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
    }
    catch{}

})

router.get("/login",(request, response) =>{
    response.send("hello, it's working");
});

module.exports = router