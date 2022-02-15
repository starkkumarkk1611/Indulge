const express = require('express');
const router = express.Router();
// const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const sgMail = require('@sendgrid/mail')


const { emailValidation } = require('../../validation');
const { sendMail } = require('../../mail_helper')
// const { createTokens, refreshAuth, verifyXXtoken } = require('../tokenHelper');


router.post('/verify-email', async (req, res, next) => {
    // console.log(req.body);
    const { value: body, error } = emailValidation(req.body);
    if (error) return res.status(400).send({ status: "Fail", message: "Validation Error: " + error.details[0].message });
    // console.log(email);
    const emailToken = jwt.sign(
        {
            email: body.email

        }, process.env.EMAIL_TOKEN_SECRET,
        {
            expiresIn: '10m',
        }
    );
    // console.log(emailToken)

    const url = `${process.env.CLIENT_ADDRESS}/verify-email-token/${emailToken}`;
    ///send email here
    const textmsg = `Hi, ${body.email} Click on the given link to confirm your email ${url}`;
    // console.log(textmsg);

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


// //Register with userName Password
// router.post('/register', async (req, res, next) => {
//     try {
//         //user validation
//         console.log(req.body);
//         const { value: user, error } = registrationValidation(req.body);
//         if (error) return res.status(400).send({ status: "Fail", message: "Validation Error: " + error.details[0].message });

//         //validating duplicate data
//         const usernameExist = await User.findOne({ username: user.username });
//         if (usernameExist) return res.status(400).send({ status: "Fail", message: "username alredy exist!" });

//         const emailExist = await User.findOne({ email: user.email });
//         if (emailExist) return res.status(400).send({ status: "Fail", message: "email alredy exist!" });

//         //hashing password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(user.password, salt);

//         const userTosave = new User({
//             username: user.username,
//             email: user.email,
//             password: hashedPassword
//         });
//         const savedUser = await userTosave.save();

//         res.send({ status: "Pass", payload: { user: { _id: savedUser._id, email: savedUser.email, username: savedUser.username, isVerified: savedUser.isVerified } }, message: `You have sucessfully Registered` });

//     } catch (error) {

//         res.status(401).send({ details: "Fail", message: 'Something wrong happened from our side plz mail us', error: error });
//     }

// });


// router.get('/confirmation/:token', async (req, res, next) => {
//     console.log(req.params.token);
//     try {
//         const { id } = jwt.verify(req.params.token, process.env.EMAIL_TOKEN_SECRET);

//         const result = await User.findByIdAndUpdate(id, { isVerified: true }, { new: true });

//         if (!result) return res.status(400).send({ message: "Something Went Wrong" });

//         res.render('taskStatus', { title: 'Email Verified', message: "Your Email Has Been Verified" });

//     } catch (error) {

//         res.status(400).send({ message: "Something Went Wrong" });
//     }
// });

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

// router.get('/refreshtoken', refreshAuth);

// //login with email password or username password
// router.post('/login', async (req, res, next) => {
//     //user validation
//     const { value: user, error } = loginValidation(req.body);
//     if (error) return res.status(400).send({ message: error.details[0].message });

//     //if username or email not mathes with database and password verification
//     var userInDb = await User.findOne({ username: user.username });
//     if (!userInDb) return res.status(400).send({ message: "username or password is wrong" });

//     if (userInDb) var validPass = await bcrypt.compare(user.password, userInDb.password);
//     if (!validPass) return res.status(400).send({ message: "username or password is wrong" });

//     if (!userInDb.isVerified) return res.status(400).send({ user: { _id: userInDb._id, username: userInDb.username, email: userInDb.email }, isVerified: userInDb.isVerified, message: `You have not confirmed your email address.` });

//     const [token, refreshToken] = await createTokens({ user: { _id: userInDb._id, email: userInDb.email, username: userInDb.username, isVerified: userInDb.isVerified } }, process.env.ACCESS_TOKEN_SECRET, process.env.REFRESH_TOKEN_SECRET + userInDb.password);

//     res.cookie('refresh_token', refreshToken, {
//         maxAge: 86_400_000,
//         httpOnly: true,
//     });

//     res.header('refresh-token', refreshToken);
//     res.header('auth-token', token).send({ user: { _id: userInDb._id, email: userInDb.email, username: userInDb.username, isVerified: userInDb.isVerified }, token: token });

// });

// router.get('/logout', verifyXXtoken, (req, res, next) => {
//     try {
//         res.clearCookie('refresh_token');
//         console.log("loged out");
//         res.send({ logged_in: false, message: "LogedOut Sucessfully" });
//     } catch (error) {
//         res.send(400).send(error);
//     }
// })


module.exports = router;
