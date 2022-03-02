const jwt = require('jsonwebtoken');
const User = require('../models/User');


const verifyXXtoken = async (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token)
    if (!token) return res.status(401).send({ message: "something went wrong :(" });
    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        var user = await User.findById(payload._id);
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: "unathoried access" });
    }
}


const createAuthTokens = async ({ user, secret, secret2 }) => {
    const token = jwt.sign(user, secret, { expiresIn: '10m', },);
    const refreshToken = jwt.sign(user, secret2, { expiresIn: '1y' },);
    return Promise.all([token, refreshToken]);
}



const verifyRegisterToken = async (req, res, next) => {
    const registerToken = req.header('register-token');
    if (!registerToken) return res.status(401).send({ message: "No token something went wrong :(" });
    try {
        const payload = jwt.verify(registerToken, process.env.REGISTER_TOKEN);
        req.user_email = payload.email;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: "unathoried access" });
    }
}

module.exports.verifyRegisterToken = verifyRegisterToken;
module.exports.verifyXXtoken = verifyXXtoken;
module.exports.createAuthTokens = createAuthTokens;
