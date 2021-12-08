const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  Like: Number,
  // userDetails: {
  //   type: Object,
  //   required: true,
  // },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  // allAnswers: [answerSchema],
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers"
  }
});

module.exports = mongoose.model("Questions", QuestionSchema);
