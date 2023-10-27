const makeValidation = require('@withvoid/make-validation')
const loginService = require("../services/login.service.js")


login = async (req, res, next) => {
    try {
        const validation = makeValidation(types => ({
            payload: req.body,
            checks: {
                email: { type: types.string },
                password: { type: types.string }
            }
        }));
        if (!validation.success) return res.status(400).json(validation);
        let checkUser = await loginService.checkUser(req, res, req.body)
        return res.status(200).json({ success: true, data: checkUser });
    } catch (error) {
        console.log("errorerrorerrorerror", error)
        return res.status(500).json({ success: false, error: error })
    }
}

module.exports = { login }