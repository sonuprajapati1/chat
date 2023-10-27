var userModel = require('../models/user.model');


onCreateUser = async (req, res, userData) => {
  try {
    // const { firstName, lastName } = userData;
    console.log("save data with email",userData);
    let data = await new userModel(userData).save()
    return ({ message: 'ok', data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
}

onGetUserById = async (req, res, id) => {
  try {
    const userFind = await userModel.find({ "_id": id })
    if (!userFind) throw ({ error: 'No user with this id found' });
    return userFind;
  } catch (error) {
    throw error;
  }
}

onGetAllUsers = async (req, res) => {
  try {
    const userFind = await userModel.find();
    if (!userFind) throw ({ error: 'No user with this id found' });
    return userFind;
  } catch (error) {
    throw error;
  }
}

exports.onGetAllUsers = onGetAllUsers
exports.onGetUserById = onGetUserById
exports.onCreateUser = onCreateUser