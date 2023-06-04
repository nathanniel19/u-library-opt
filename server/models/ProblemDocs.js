const mongoose = require("mongoose");

const ProblemDocsSchema = new mongoose.Schema({
    unitBrand: {
        type: String,
        require: true,
    },
    unitModel: {
        type: String,
        require: true,
    },
    unitProblem: {
        type: String,
        require: true,
    },
    unitUrl: {
        type: String,
        require: true,
    }
});

const ProblemDocs = mongoose.model("ProblemData", ProblemDocsSchema, 'problemdatas');
module.exports = ProblemDocs;