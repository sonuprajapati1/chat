const makeValidation = require('@withvoid/make-validation')
var userService = require('../services/user.service.js')

onGetAllUsers = async (req, res, next)=>{
  console.log("test data");
  try {
    const user = await userService.onGetAllUsers(req, res);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("errorerrorerrorerror",error)
    return res.status(500).json({ success: false, error: error })
  }
}
onGetUserById = async (req, res, next) => {
  try {
    console.log("req.par",req.params.id);
    const user = await userService.onGetUserById(req, res,req.params.id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("errorerrorerrorerror",error)
    return res.status(500).json({ success: false, error: error })
  }
}
onCreateUser = async (req, res, next) => {
  const validation = makeValidation(types => ({
    payload: req.body,
    checks: {
      firstName: { type: types.string },
      lastName: { type: types.string },
      email: {type: types.string},
      password : {type: types.string}
    }
  }));
  if (!validation.success) return res.status(400).json(validation);
  let userData = await userService.onCreateUser(req, res,req.body)
  console.log("userDatauserData",userData)
  res.status(200).json(userData)
}
onDeleteUserById = async (req, res, next) => {
  res.send("return")
};

module.exports = { onCreateUser, onGetAllUsers, onGetUserById,onDeleteUserById }