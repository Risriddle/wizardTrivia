const mongoose = require('mongoose');


// Define the schema for the questions
const questionSchema = new mongoose.Schema({
  id: Number,
  level: String,
  question: String,
  incorrect_answers: [String],
  correct_answer: String,
});

// Create a model based on the schema
const Question = mongoose.model('que', questionSchema);

module.exports = Question;

