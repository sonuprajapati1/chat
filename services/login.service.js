var userModel = require('../models/user.model');

checkUser = async (req, res, data) => {
    try {
        const userFind = await userModel.find({ "email": data.email, "passowrd": data.passowrd })
        if (!userFind) throw ({ error: 'No user with this id found' });
        return userFind;
    } catch (error) {
        throw error;
    }
}

module.exports = { checkUser }