const mongoose = require('mongoose');

// Skill Schema
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Skill Model
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
