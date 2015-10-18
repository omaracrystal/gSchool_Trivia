var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  category: String,
  question: String,
  choices: [],
  answer: String
});


module.exports = mongoose.model('Question', QuestionSchema);
