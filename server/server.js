const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());
// First API route
app.get('/', (req, res) => {
  res.send('Hello from Express Server!');
});

// POST API route
app.post('/skills', (req, res) => {
  const skill = req.body.skill;

  console.log('Received skill:', skill);

  res.json({
    message: `${skill} received successfully!`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
