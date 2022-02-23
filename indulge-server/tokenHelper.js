const jwt = require('jsonwebtoken');

const verifyRegisterToken = async (req, res, next) => {
    const registerToken = req.header('register-token');
    console.log(registerToken);
    if (!registerToken) return res.status(401).send({ message: "No token something went wrong :(" });
    try {
        const payload = jwt.verify(registerToken, process.env.REGISTER_TOKEN);
        console.log(payload, "<- payload");
        req.user_email = payload.email;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: "unathoried access" });
    }
}

module.exports.verifyRegisterToken = verifyRegisterToken;
