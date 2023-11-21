const bcrypt = require("bcryptjs/dist/bcrypt")
const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const { validationResult } = require('express-validator');
const userService = require("../services/userService")
async function RegisterUser(request, response){
    const {username, email, password} = request.body
    console.log(request.body)
    try{
        const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
        const user = await userService.findOneUser(email)
        if (user){
            return response.status(400).json({message: "user already exist"})  
        }
        const createdUser = await userService.createUser({username, email, password})
        return response.status(201).json({message: "user created successfully",user:createdUser})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}

//get is below
async function GetAllUsers(request, response){
    
    
    try{
        const users = await userService.GetAllUSers()
        return response.status(200).json({users})
    }

    catch(error){
        return response.status(500).json({message: error.message})
    }
}
