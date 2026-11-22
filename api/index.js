const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Skill = require('../server/Skill');

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.log('Error:', err.message));

app.use(cors({
  origin: ['https://my-mern-portfolio1.vercel.app', 'http://localhost:5173']
}));
app.use(express.json());

app.get('/', (req,res)=> res.send('Hello from Express Server!'));
app.get('/skills', async (req,res)=> {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch(e){ res.status(500).json({message: e.message}) }
});
app.post('/skills', async (req,res)=> {
  try {
    const skill = new Skill({ name: req.body.skill });
    const saved = await skill.save();
    res.json({ message: 'Skill saved', data: saved });
  } catch(e){ res.status(500).json({message: e.message}) }
});
app.delete('/skills/:id', async (req,res)=> {
  const deleted = await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted', data: deleted });
});
app.put('/skills/:id', async (req,res)=> {
  const updated = await Skill.findByIdAndUpdate(req.params.id, { name: req.body.skill }, { new: true });
  res.json({ message: 'Updated', data: updated });
});

module.exports = app;
