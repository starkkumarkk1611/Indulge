var express = require('express');
var router = express.Router();
const Jnf = require('../../models/Jnf');
const { verifyXXtoken } = require('../../helpers/tokenHelper');


/* GET home page. */
router.post('/save-jnf', verifyXXtoken, async (req, res, next) => {
    const reqJnf = req.body;
    try {
        try {
            const jnfDel = await Jnf.deleteOne({ jnfId: reqJnf.jnfId });
        } catch (error) {
        }
        const jnfToSave = new Jnf({
            jnfId: reqJnf.jnfId,
            authorId: req.user._id,
            companyDetails: {
                category: reqJnf.companyDetails.category,
                website: reqJnf.companyDetails.website,
                name: reqJnf.companyDetails.name
            },
            eligibleCourses: {
                btech4year: reqJnf.eligibleCourses.btech4year,
                mtechDual5year: reqJnf.eligibleCourses.mtechDual5year,
                skillBased: reqJnf.eligibleCourses.skillBased,
            },
            jobDetails: {
                desc: reqJnf.jobDetails.desc,
                designation: reqJnf.jobDetails.designation,
                placeOfPostioning: reqJnf.jobDetails.placeOfPostioning
            },
            saleryDetails: {
                bondDetails: reqJnf.saleryDetails.bondDetails,
                ctcBreakup: reqJnf.saleryDetails.ctcBreakup,
                ctcInLPA: reqJnf.saleryDetails.ctcInLPA
            },
            selectionProcedure: {
                otherQualificationRound: reqJnf.selectionProcedure.otherQualificationRound,
                resumeSort: reqJnf.selectionProcedure.resumeSort,
                typeOfTest: reqJnf.selectionProcedure.typeOfTest
            },
            isDraft: true,
            isConfirmed: false,
        });
        const savedJnf = await jnfToSave.save();

        res.send({ status: "Success", payload: { jnfData: savedJnf }, message: "Saved Succesfully" })
    } catch (error) {
        res.status(401).send({ status: "Fail", message: "Something went Wrong" });
    }
});

router.get('/get-jnf', verifyXXtoken, async (req, res, next) => {

    try {
        Jnf.find({ authorId: req.user._id }).then(result => {
            res.send({ status: "Success", message: "Jnf Fetched", payload: { jnfs: result } })
        }).catch(err => {
            res.send(401)({
                status: "Fail",
                err,
                message: "Error in Data fetching"
            })
        });

    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: "Fail",
            error,
            message: "Not able to fetch"
        })
    }

})

router.post('/submit-jnf', verifyXXtoken, async (req, res, next) => {
    const reqJnf = req.body;
    try {
        try {
            const jnfDel = await Jnf.deleteOne({ jnfId: reqJnf.jnfId });
        } catch (error) {
        }
        const jnfToSave = new Jnf({
            jnfId: reqJnf.jnfId,
            authorId: req.user._id,
            companyDetails: {
                category: reqJnf.companyDetails.category,
                website: reqJnf.companyDetails.website,
                name: reqJnf.companyDetails.name
            },
            eligibleCourses: {
                btech4year: reqJnf.eligibleCourses.btech4year,
                mtechDual5year: reqJnf.eligibleCourses.mtechDual5year,
                skillBased: reqJnf.eligibleCourses.skillBased,
            },
            jobDetails: {
                desc: reqJnf.jobDetails.desc,
                designation: reqJnf.jobDetails.designation,
                placeOfPostioning: reqJnf.jobDetails.placeOfPostioning
            },
            saleryDetails: {
                bondDetails: reqJnf.saleryDetails.bondDetails,
                ctcBreakup: reqJnf.saleryDetails.ctcBreakup,
                ctcInLPA: reqJnf.saleryDetails.ctcInLPA
            },
            selectionProcedure: {
                otherQualificationRound: reqJnf.selectionProcedure.otherQualificationRound,
                resumeSort: reqJnf.selectionProcedure.resumeSort,
                typeOfTest: reqJnf.selectionProcedure.typeOfTest
            },
            isDraft: false,
            isConfirmed: false,
        });
        const savedJnf = await jnfToSave.save();

        res.send({ status: "Success", payload: { jnfData: savedJnf }, message: "Submitted Succesfully" })
    } catch (error) {
        console.log(error, "SFgdfg");
        res.status(401).send({ status: "Fail", message: "Something went Wrong" });
    }
});


module.exports = router;
