import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// POST route
app.post('/skills', (req, res) => {
  const { skill } = req.body;

  if (typeof skill !== 'string' || skill.trim() === '') {
    return res.status(400).json({
      message: 'Skill is required'
    });
  }

  res.status(201).json({
    message: `${skill} received by server!`,
    skill: skill
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
