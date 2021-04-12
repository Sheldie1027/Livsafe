const { response, request } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const userSchema = require('../models/user');

router.post('/registerform', async (request, response) =>{
    try {
    const {username, email, mobile, password} = request.body;

    if (!username || !email || !mobile || !password)
        return response.status(400).json({ msg: " Not all fields have been filled"});
    
    if(!username.match(/^[a-zA-Z ]*$/)) {
        return response
        .status(400)
        .json({ msg: "Please enter alphabet characters only for username"}); 
    }

    const emailv = /\S+@\S+\.\S+/;
    if (!emailv.test (email)) {
        return response
        .status(400)
        .json({ msg: "Please enter valid email-ID"});
      }

    if (!mobile.match(/^[0-9]{10}$/)) {
        return response
        .status(400)
        .json({ msg: "Please enter valid mobile number"}); 
    }

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
        
        if (!username.match(/^[a-zA-Z ]*$/))
            return response.status(400).json({msg : "Please enter alphabet characters only for username"})
        const user = await userSchema.findOne({username : username});
        if(!user)
            return response.status(400).json({ msg: "This username does not exist"});

        if (password.length < 6)
            return response.status(400).json({ msg: "The password needs to be 6 characters or more"});
        
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

router.post("/tokenIsValid", async (request, response) => {
    try{
        const token = request.header("x-auth-token");
        if(!token) return response.json(false);

        const verified = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        if (!verified) return response.json(false);

        const user = await userSchema.findById(verified.id);
        if(!user) return response.json(false);

        return response.json(true);

    }
    catch (err) {
        response.status(500).json({ error: err.message});
    }
});

router.get("/",auth, async (request, response) =>{
    const user = await userSchema.findById(request.user);
    response.json({
        username: user.username,
        id: user._id
    });
});



module.exports = router