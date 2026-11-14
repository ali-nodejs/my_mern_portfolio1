require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const app = express();

const Skill = require('./Skill');

const PORT = 5000;
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!');
  })
  .catch((error) => {
    console.log('MongoDB Connection Error:', error.message);
  });

// Enable CORS
app.use(cors());
app.use(express.json());
// First API route
app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});
// GET all skills from MongoDB
app.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();

    res.json(skills);

  } catch (error) {
    res.status(500).json({
      message: 'Error fetching skills',
      error: error.message
    });
  }
});

// POST API route
app.post('/skills', async (req, res) => {
  try {
    const skill = new Skill({
      name: req.body.skill
    });

    const savedSkill = await skill.save();

    res.json({
      message: 'Skill saved successfully!',
      data: savedSkill
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error saving skill',
      error: error.message
    });
  }
});
// PUT API - Update skill
app.put('/skills/:id', async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      { name: req.body.skill },
      { new: true, runValidators: true }
    );

    if (!updatedSkill) {
      return res.status(404).json({
        message: 'Skill not found'
      });
    }

    res.json({
      message: 'Skill updated successfully!',
      data: updatedSkill
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error updating skill',
      error: error.message
    });
  }
});

// DELETE skill from MongoDB
app.delete('/skills/:id', async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(
      req.params.id
    );

    if (!deletedSkill) {
      return res.status(404).json({
        message: 'Skill not found'
      });
    }

    res.json({
      message: 'Skill deleted successfully!',
      data: deletedSkill
    });

  } catch (error) {
    res.status(500).json({
      message: 'Error deleting skill',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
