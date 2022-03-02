var express = require('express');
var router = express.Router();
const Jnf = require('../../models/Jnf');
const { verifyXXtoken } = require('../../helpers/tokenHelper');

router.get('/get-all-jnf', verifyXXtoken, async (req, res, next) => {
    try {
        Jnf.find().then(result => {
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

router.post('/confirm-jnf', verifyXXtoken, async (req, res, next) => {
    try {
        const updated = Jnf.findOneAndUpdate({ jnfId: req.body.jnfId }, { isConfirmed: true }, { new: true });
        res.send({ status: "Success", message: "Jnf Fetched", payload: { jnfs: updated } });
    } catch (error) {
        console.log(error)
        res.status(400).send({
            status: "Fail",
            error,
            message: "Not able to fetch"
        })
    }
})

module.exports = router;
