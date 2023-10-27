var jwt = require('jsonwebtoken')
const user = require("../controllers/user.controller")
const userService = require("../services/user.service")

const SECRET_KEY = 'sonu123';

decode = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(400).json({ success: false, message: 'No access token provided' });
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(accessToken, SECRET_KEY);
        console.log("decoded",decoded);
        req.userId = decoded.userId;
        return next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

encode = async (req, res, next) => {
    try {
        const { firstName,lastName,email } = req.body;
        const payload = {
            firstName:firstName,
            lastName: lastName,
            email: email
        };
        const authToken = jwt.sign(payload, SECRET_KEY);
        console.log('Auth', authToken);
        req.authToken = authToken;
        res.authToken = authToken;
        next();
    } catch (error) {
        return res.status(400).json({ success: false, message: error.error });
    }
}

module.exports = { decode, encode }