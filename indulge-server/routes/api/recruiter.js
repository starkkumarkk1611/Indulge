var express = require('express');
var router = express.Router();
const Jnf = require('../../models/Jnf');
const { verifyXXtoken } = require('../../helpers/tokenHelper');


/* GET home page. */
router.post('/save-jnf', verifyXXtoken, async (req, res, next) => {
    const reqJnf = req.body;
    try {
        const jnfToSave = new Jnf({
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
            isDrafted: true,
            isConfirmed: false,
        });
        const savedJnf = await jnfToSave.save();
        res.send({ status: "Fail", message: "Saved Succesfully" })
    } catch (error) {
        res.send(401).send({ status: "Fail", message: "Something went Wrong" });
    }
});

module.exports = router;
