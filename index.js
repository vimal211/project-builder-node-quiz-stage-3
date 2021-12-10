const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { questionSC, optionSC, answerSC } = require("./schema");

let dburl =
  "mongodb+srv://<username>:<password>@vimalcluster.afqw9.mongodb.net/Quiz?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
mongoose.connect(dburl);

//Questions CRUD operation
app.post("/api/questions", async (req, res) => {
  try {
    const question = await questionSC.create(req.body);
    res.json({
      message: "Data Inserted",
    });
  } catch (error) {
    res.json({
      message: "Data not Inserted",
    });
  }
});

app.get("/api/questions", async (req, res) => {
  try {
    const question = await questionSC.find();
    res.json({
      message: question,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.get("/api/questions/:id", async (req, res) => {
  try {
    const question = await questionSC.find({ id: req.params.id });
    res.json({
      message: question,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.delete("/api/questions/:id", async (req, res) => {
  try {
    const question = await questionSC.removeOne({ id: req.params.id });
    res.json({
      message: question,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.put("/api/questions/:id", async (req, res) => {
  try {
    const question = await questionSC.updateOne(
      { id: req.params.id },
      { $set: { question: req.body } }
    );
    res.json({
      message: question,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

//Answer CRUD operation
app.post("/api/answers", async (req, res) => {
  try {
    const answer = await answerSC.create(req.body);
    res.json({
      message: "Data Inserted",
    });
  } catch (error) {
    res.json({
      message: "Data not Inserted",
    });
  }
});

app.get("/api/answers", async (req, res) => {
  try {
    const answer = await answerSC.find();
    res.json({
      message: answer,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.get("/api/answers/:id", async (req, res) => {
  try {
    const answer = await answerSC.find({ id: req.params.id });
    res.json({
      message: answer,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.delete("/api/answers/:id", async (req, res) => {
  try {
    const answer = await answerSC.removeOne({ id: req.params.id });
    res.json({
      message: answer,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.put("/api/answers/:id", async (req, res) => {
  try {
    const answer = await answerSC.updateOne(
      { id: req.params.id },
      { $set: { answer: req.body } }
    );
    res.json({
      message: answer,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

//Options CRUD operation
app.post("/api/options", async (req, res) => {
  try {
    const options = await optionSC.create(req.body);
    res.json({
      message: "Data Inserted",
    });
  } catch (error) {
    res.json({
      message: "Data not Inserted",
    });
  }
});

app.get("/api/options", async (req, res) => {
  try {
    const options = await optionSC.find();
    res.json({
      message: options,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.get("/api/options/:id", async (req, res) => {
  try {
    const options = await optionSC.find({ id: req.params.id });
    res.json({
      message: options,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.delete("/api/options/:id", async (req, res) => {
  try {
    const options = await optionSC.removeOne({ id: req.params.id });
    res.json({
      message: options,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.put("/api/options/:id", async (req, res) => {
  try {
    const options = await optionSC.updateOne({ id: req.params.id }, req.body);
    res.json({
      message: options,
    });
  } catch (error) {
    res.json({
      message: "Data not found",
    });
  }
});

app.listen(3000, () => console.log("server is running"));
