const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema(
  {
    id: { type: Number, minlength: 1 },
    question: { type: String, minlength: 10 },
  },
  { collection: "questions" }
);
const questionSC = mongoose.model("questionSC", questionSchema);

const answerSchema = new mongoose.Schema(
  {
    id: { type: Number, minlength: 1 },
    answer: { type: String },
  },
  { collection: "answers" }
);
const answerSC = mongoose.model("answerSC", answerSchema);

const optionSchema = new mongoose.Schema(
  {
    id: { type: Number, minlength: 1 },
    optionA: { type: String, minlength: 1, required: true },
    optionB: { type: String, minlength: 1, required: true },
    optionC: { type: String, minlength: 1, required: true },
    optionD: { type: String, minlength: 1, required: true },
  },
  { collection: "options" }
);
const optionSC = mongoose.model("optionSC", optionSchema);

module.exports = {
  questionSC: questionSC,
  optionSC: optionSC,
  answerSC: answerSC,
};
