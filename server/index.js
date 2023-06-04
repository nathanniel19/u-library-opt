const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();

const ProblemDocsModel = require('./models/ProblemDocs');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://jjuand22:juan22jj@u-library.bof59ml.mongodb.net/production?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get("/", async (req, res) => {
    res.send("running server");
});
app.post("/problemSubmit", async (req, res) => {
    const unitBrand = req.body.brand;
    const unitModel = req.body.model;
    const unitProblem = req.body.problem;
    const unitUrl = req.body.url;

    const problemData = new ProblemDocsModel({
        unitBrand: unitBrand,
        unitModel: unitModel,
        unitProblem: unitProblem,
        unitUrl: unitUrl
    });

    try {
        await problemData.save();
        res.send("Data Submitted");
    }
    catch (err) {
        console.log(err);
    }
});

app.get("/problemRead", async (req, res) => {
    const data = await ProblemDocsModel.find({})
    res.send(data);
    
});

app.listen(3001, () => {
    console.log('server is running on port 3001')
});