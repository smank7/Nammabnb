const User = require("../models/userModel")
async function createUser(userData){
    try {
        const newUser = await User.create(userData);
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
      }
}

async function findOneUser(email){
  try {
      const newUser = await User.findOne({email});
      return newUser;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}

async function findUserByID(id){
  try {
      const user = await User.findById(id)
      return user;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
}