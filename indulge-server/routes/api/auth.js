const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { confirmEmailValidation, registrationValidation, loginValidation } = require('../../helpers/validationHelper');
const { sendMail } = require('../../helpers/mailHelper')
const { verifyRegisterToken, createAuthTokens, verifyXXtoken } = require('../../helpers/tokenHelper');


router.post('/send-confirm-mail', async (req, res, next) => {
    console.log(req.body);
    const { value: body, error } = confirmEmailValidation(req.body);
    if (error) return res.status(400).send({ status: "Fail", message: "Validation Error: " + error.details[0].message });

    const emailExist = await User.findOne({ email: body.email });
    if (emailExist) return res.status(400).send({ status: "Fail", message: "email alredy exist!" });
    var emailToken;

    switch (body.type) {
        case "student":
            emailToken = jwt.sign(
                {
                    email: body.email

                }, process.env.STUDENT_EMAIL_VERIFY_TOKEN_SECRET,
                {
                    expiresIn: '1d',
                }
            );

            break;
        case "recruiter":
            emailToken = jwt.sign(
                {
                    email: body.email

                }, process.env.RECRUITER_EMAIL_VERIFY_TOKEN_SECRET,
                {
                    expiresIn: '1d',
                }
            );
            break;

        default:
            break;
    }
    const url = `${process.env.CLIENT_ADDRESS2}/auth/${body.type}/verify/${emailToken}`;

    const textmsg = `Hi, ${body.email} Click on the given link to confirm your email ${url}`;


    const htmlmsg = `<div>
                        <h1>
                            Hi, ${body.email}<br> Click on the given link to confirm your email
                        </h1>
                        <h1>
                            Link is valid for only 24 hours <a href=${url}>Click here to verify your email</a>
                        </h1>
                    </div>`;

    sendMail({ to_email: body.email, subject_email: "Verify Your Email", text_email: textmsg, html_email: htmlmsg }).then(() => {
        res.send({ status: "Success", message: `Verification Link sent to ${body.email} click on the link sent to your Email to verify` })
    }).catch((error) => {
        res.status(401).send({ status: "Fail", error: error, message: "We are not able to send Email" });
    });
});


router.post('/verify-mail', async (req, res, next) => {
    console.log(req.body);
    const { type, token } = req.body;
    if (!(type === 'student' || type === 'recruiter')) return res.status(404).send({ status: "Fail", message: "Not Found" });
    var secret;
    if (type === 'student')
        secret = process.env.STUDENT_EMAIL_VERIFY_TOKEN_SECRET;
    else
        secret = process.env.RECRUITER_EMAIL_VERIFY_TOKEN_SECRET;

    try {
        const { email } = jwt.verify(token, secret);

        const emailExist = await User.findOne({ email: email });
        if (emailExist) return res.status(400).send({ status: "Fail", message: "email alredy exist!" });
        const registerToken = jwt.sign(
            {
                email: email

            }, process.env.REGISTER_TOKEN,
            {
                expiresIn: '1d',
            }
        );
        res.send({ status: "Success", payload: { email, registerToken }, message: "Your Email Has been Verified" });
    } catch {
        console.log("not verifes")
        res.status(401).send({ status: "Fail", message: "Email Not verified" });
    }
});

router.post('/register/:type', verifyRegisterToken, async (req, res, next) => {
    const type = req.params.type;
    if (!(type === 'student' || type === 'recruiter')) return res.status(404).send({ status: "Fail", message: "Not Found" });
    try {
        //user validation
        console.log(req.body);
        const { value: user, error } = registrationValidation(req.body);
        console.log("sdfgd");
        if (error) return res.status(400).send({ status: "Fail", message: "Validation Error: " + error.details[0].message });

        const emailExist = await User.findOne({ email: user.email });
        if (emailExist) return res.status(400).send({ status: "Fail", message: "email alredy exist!" });
        console.log(user);
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        const userTosave = new User({
            name: user.name,
            email: user.email,
            type: user.type,
            company: user.company,
            password: hashedPassword
        });
        const savedUser = await userTosave.save();
        console.log(savedUser);
        const [token, refreshToken] = await createAuthTokens({ user: { _id: savedUser._id, email: savedUser.email, name: savedUser.name, company: savedUser.company }, secret: process.env.ACCESS_TOKEN_SECRET, secret2: process.env.REFRESH_TOKEN_SECRET + savedUser.password });
        console.log(token, refreshToken);
        res.cookie('refresh_token', refreshToken, {
            maxAge: 86_400_000,
            httpOnly: true,
        });

        res.header('refresh-token', refreshToken);
        res.header('auth-token', token).send({ status: "Success", payload: { user: { _id: savedUser._id, type: savedUser.type, email: savedUser.email, company: savedUser.company, accessToken: token, refreshToken: refreshToken } } });

    } catch (error) {
        console.log(error);
        res.status(401).send({ status: "Fail", message: 'Something wrong happened from our side plz mail us', error: error });
    }
});

router.post('/login/:type', async (req, res, next) => {
    try {

        const type = req.params.type;
        if (!(type === 'student' || type === 'recruiter' || type === "admin")) return res.status(404).send({ status: "Fail", message: "Not Found" });
        //user validation
        const { value: user, error } = loginValidation(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        //if username or email not mathes with database and password verification
        var userInDb = await User.findOne({ email: user.email, type: user.type });
        if (!userInDb) return res.status(400).send({ message: "username or password is wrong" });

        if (userInDb) var validPass = await bcrypt.compare(user.password, userInDb.password);
        if (!validPass) return res.status(400).send({ message: "username or password is wrong" });

        const [token, refreshToken] = await createAuthTokens({ user: { _id: userInDb._id, email: userInDb.email, name: userInDb.name, company: userInDb.company }, secret: process.env.ACCESS_TOKEN_SECRET, secret2: process.env.REFRESH_TOKEN_SECRET + userInDb.password });

        res.cookie('refresh_token', refreshToken, {
            maxAge: 86_400_000,
            httpOnly: true,
        });

        res.header('refresh-token', refreshToken);
        res.header('auth-token', token).send({ status: "Success", payload: { user: { _id: userInDb._id, type: userInDb.type, email: userInDb.email, company: userInDb.company, accessToken: token, refreshToken: refreshToken } } });


    } catch (error) {
        console.log(error);
        res.status(401).send({ status: "Fail", message: "Unauthorise Access", error });
    }
});

router.get('/renew-access-token', async (req, res, next) => {
    try {
        var refreshToken = req.cookies.refresh_token;
        console.log(refreshToken);
        if (!refreshToken) return res.status(401).send({ status: "Fail", message: "Unauthorize acecsss" });
        const { _id } = jwt.decode(refreshToken);
        console.log(_id, "dfdfdf");

        if (!_id) return res.status(401).send({ status: "Fail", message: "Unauthorize acecsss" });

        const userInDb = await User.findById(_id);
        if (!userInDb) return res.status(401).send({ status: "Fail", message: "Unauthorize acecsss" });
        console.log(userInDb)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET + userInDb.password);
        console.log("sfgsfd");
        const [newToken, newRefreshToken] = await createAuthTokens({
            user: {
                _id: userInDb._id, email: userInDb.email, name: userInDb.name
            }
            , secret: process.env.ACCESS_TOKEN_SECRET, secret2: process.env.REFRESH_TOKEN_SECRET + userInDb.password
        });
        console.log(newToken, newRefreshToken);
        res.cookie('refresh_token', newRefreshToken, {
            maxAge: 86_400_000,
            httpOnly: true,
        });

        res.header('refresh-token', newRefreshToken);
        res.header('auth-token', newToken).send({ status: "Success", payload: { user: { _id: userInDb._id, type: userInDb.type, email: userInDb.email, company: userInDb.company, accessToken: newToken, refreshToken: newRefreshToken } } });
    }
    catch (error) {
        console.log(error)
        res.status(401).send({ status: "Fail", error, message: "Unauthorise Access" });
    }

})

router.get('/logout', (req, res, next) => {
    try {
        res.clearCookie('refresh_token');
        console.log("loged out");
        res.send({ status: "Success", message: "LogedOut Sucessfully" });
    } catch (error) {
        console.log(error);
        res.send(400).send({ payload: { error }, status: "Fail", message: "Something Went Wrong" });
    }
})



// router.post('/change-email', async (req, res, next) => {
//     console.log(req.body);

//     try {
//         //user validation

//         const { value: user, error } = changeEmailValidation(req.body);
//         if (error) return res.status(400).send({ status: "Fail", message: "Validation Error: " + error.details[0].message });


//         var userInDb = await User.findOne({ username: user.username });
//         if (!userInDb) return res.status(400).send({ status: "Fail", message: "username or password is wrong" });


//         if (userInDb) var validPass = await bcrypt.compare(user.password, userInDb.password);
//         if (!validPass) return res.status(400).send({ status: "Fail", message: "username or password is wrong" });

//         const result = await User.findByIdAndUpdate(userInDb._id, { email: user.new_email }, { new: true });
//         console.log(result);
//         res.send({ status: "Pass", payload: { user: { _id: result._id, email: result.email, username: result.username } }, message: `Email  updated sucessfully` });

//     } catch (error) {

//         res.status(401).send({ status: "Fail", message: 'Something wrong happened from our side plz mail us', error: error });
//     }

// });


// router.post('/reset-password', async (req, res, next) => {

//     try {
//         //user validation
//         var user;
//         if (req.body.username) {
//             const { value: user_temp, error: error } = usernameValidation(req.body);
//             if (!error) { user = { username: user_temp.username }; }
//             else { return res.status(400).send({ status: "Fail", message: "Enter valid username" }); }
//         }
//         if (req.body.email) {
//             const { value: user_temp, error: error } = emailValidation(req.body);
//             if (!error) { user = { email: user_temp.email }; }
//             else { return res.status(400).send({ status: "Fail", message: "Enter valid email" }); }
//         }
//         console.log(user);

//         var userInDb = await User.findOne(user);
//         console.log(userInDb);

//         if (!userInDb) return res.status(400).send({ status: "Fail", message: "Data not exist" });

//         const changePwdToken = jwt.sign(
//             {
//                 id: userInDb._id,

//             }, process.env.CHANGE_PASSWORD_TOKEN_SECRET,
//             {
//                 expiresIn: '1d',
//             }
//         );
//         console.log(changePwdToken);


//         const url = `${process.env.AUTH_SERVER_ADDRESS}/create-new-password/${changePwdToken}`;
//         //send email here
//         const htmlmsg = `<div>
//                             <h1>
//                                 Hi, ${userInDb.username}<br> Click on the below link
//                             </h1>
//                             <h1>
//                             Link is valid for only 24 hours <a href=${url}>Click here to change your password</a>
//                             </h1>
//                         </div>`;

//         const msg = {
//             to: userInDb.email, // Change to your recipient
//             from: 'onlinestudenttoolbox@gmail.com', // Change to your verified sender
//             subject: "Change Your Password | Online Student Tool Box",
//             html: htmlmsg,
//         }
//         sgMail
//             .send(msg)
//             .then(() => {
//                 res.send({ message: `Password reset Link sent to ${userInDb.email} click on the sent link to Change change your password` });
//             })
//             .catch((error) => {
//                 res.status(401).send({ error: error, message: "We are not able to send Email" });
//             });

//     } catch (error) {

//         res.status(401).send({ message: 'Something wrong happened from our side plz mail us', error: error });
//     }

// });

// router.get('/create-new-password/:token', async (req, res, next) => {

//     try {
//         const { id } = jwt.verify(req.params.token, process.env.CHANGE_PASSWORD_TOKEN_SECRET);
//         res.render('changePassword', { token: req.params.token });
//     } catch (error) {

//         res.status(400).send({ message: "Something Went Wrong" });
//     }
// });

// router.post('/updatepassword/:token', async (req, res, next) => {

//     try {
//         const password = req.body.new_password;
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const { id } = jwt.verify(req.params.token, process.env.CHANGE_PASSWORD_TOKEN_SECRET);
//         const result = await User.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });

//         res.render('taskStatus', { title: "Password Changed", message: "Your Password Has Been Changed" });
//     } catch (error) {

//         res.status(400).send({ message: "Something Went Wrong" });
//     }
// });





module.exports = router;
