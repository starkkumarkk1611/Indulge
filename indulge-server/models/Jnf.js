const mongoose = require('mongoose');

const jnfSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    companyDetails: new mongoose.Schema({
        category: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        }
    }),
    eligibleCourses: new mongoose.Schema({
        btech4year: { type: Array },
        mtechDual5year: { type: Array },
        skillBased: { type: Array }
    }),
    jobDetails: new mongoose.Schema({
        desc: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        placeOfPostioning: {
            type: String,
            required: true,
        }
    }),
    saleryDetails: new mongoose.Schema({
        bondDetails: {
            type: String,
            required: true,
        },
        ctcBreakup: {
            type: String,
            required: true,
        },
        ctcInLPA: {
            type: String,
            required: true,
        }
    }),
    selectionProcedure: new mongoose.Schema({
        otherQualificationRound: {
            type: String,
            required: true,
        },
        resumeSort: {
            type: String,
            required: true,
        },
        typeOfTest: {
            type: String,
            required: true,
        }
    }),
    isDraft: {
        type: Boolean,
    },
    isConfirmed: {
        type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now()
    },

});

module.exports = mongoose.model('Jnf', jnfSchema);