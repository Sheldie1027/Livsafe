const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const userSchema = require('../models/user');

router.post('/registerform', async (request, response) =>{
    try {
    const {username, email, mobile, password} = request.body;

    if (!username || !email || !mobile || !password)
        return response.status(400).json({ msg: " Not all fields have been filled"});
    if (password.length < 6)
        return response
            .status(400)
            .json({ msg: "The password needs to be 6 characters or more"});
    
    const existingUsername = await userSchema.findOne({username: username});
    const existingEmail = await userSchema.findOne({email: email});
    if (existingUsername){
        return response
            .status(400)
            .json({msg: "An account with this username exists"});
    }
    if (existingEmail){
        return response
            .status(400)
            .json({msg: "An account with this email exists"}); 
    }
    
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newUser = new userSchema({
        username,
        email,
        mobile,
        password : passwordHash
    });

    const savedUser = await newUser.save();
    response.json(savedUser);

    }
    catch (err){
        response.status(500).json({error : err.message});
    }

});

router.post('/loginform', async (request, response) => {
    try{
        const { username, password} = request.body;

        if (!username || !password )
            return response.status(400).json({ msg: "Not all fields have been filled"});

        const user = await userSchema.findOne({username : username});
        if(!user)
            return response.status(400).json({ msg: "This username does not exist"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return response.status(400).json({ msg: "Invalid password"});

        const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN_SECRET);
        response.json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });


    }
    catch (err) {
        response.status(500).json({ error: err.message});
    }

});

router.delete("/delete", auth, async (request, response) => {
    try{
        const deletedUser = await  userSchema.findByIdAndDelete(request.user);
        response.json(deletedUser);
    }
    catch (err) {
        response.status(500).json({ error: err.message});
    }
});

module.exports = router