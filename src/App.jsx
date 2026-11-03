
import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'

function App() {
  const [skills, setSkills] = useState([
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'React'
  ])

  const [newSkill, setNewSkill] = useState('')
  const [message, setMessage] = useState('')

  function addSkill() {
    const skill = newSkill.trim()

    if (skill === '') {
      return
    }

    setSkills([...skills, skill])
    setNewSkill('')
  }

  function deleteSkill(skillToDelete) {
    setSkills(
      skills.filter((skill) => skill !== skillToDelete)
    )
  }
  // GET request function
async function connectBackend() {
  const response = await fetch('http://localhost:5000/profile');

  const data = await response.text();

  setMessage(data);
}

// POST request function
async function sendSkill() {
  const skill = newSkill.trim();

  if (skill === '') {
    return;
  }

  const response = await fetch('http://localhost:5000/skills', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      skill: skill
    })
  });

  const data = await response.json();

  setMessage(data.message);
}
  return (
    <div>
      <Header title="Welcome to React!" />

      <p>These are the skills I am learning:</p>

      <button onClick={connectBackend}>
        Connect to Backend
      </button>

      <button onClick={sendSkill}>
        Send Skill to Backend
      </button>

      <p>{message}</p>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}{' '}
            <button onClick={() => deleteSkill(skill)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter a skill"
        value={newSkill}
        onChange={(event) => setNewSkill(event.target.value)}
      />

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  )
}

export default App
