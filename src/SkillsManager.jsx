
import { useState, useEffect } from 'react'

function SkillsManager() {
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState('')
  const [message, setMessage] = useState('')
  const [editingSkillId, setEditingSkillId] = useState(null)
  const [editSkillName, setEditSkillName] = useState('')
  const [loading, setLoading] = useState(false)

  // GET skills from MongoDB
  async function fetchSkills() {
    try {
      setLoading(true)

      const response = await fetch('http://localhost:5000/skills')
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Failed to fetch skills')
      }

      setSkills(data)
      setMessage('Skills loaded from MongoDB!')
    } catch (error) {
      console.error(error)
      setMessage('Failed to fetch skills')
    } finally {
      setLoading(false)
    }
  }

  // POST new skill
  async function sendSkill() {
    const skill = newSkill.trim()

    if (!skill) return

    try {
      const response = await fetch('http://localhost:5000/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skill })
      })

      const data = await response.json()

      if (response.ok) {
        setSkills(previous => [...previous, data.data])
        setNewSkill('')
        setMessage(data.message)
      } else {
        setMessage(data.message)
      }
    } catch (error) {
      console.error(error)
      setMessage('Failed to save skill')
    }
  }

  // DELETE skill
  async function deleteSkill(skillToDelete) {
    try {
      const response = await fetch(
        `http://localhost:5000/skills/${skillToDelete._id}`,
        { method: 'DELETE' }
      )

      const data = await response.json()

      if (response.ok) {
        setSkills(previous =>
          previous.filter(skill => skill._id !== skillToDelete._id)
        )
        setMessage(data.message)
      } else {
        setMessage(data.message)
      }
    } catch (error) {
      console.error(error)
      setMessage('Failed to delete skill')
    }
  }

  // PUT update skill
  async function saveEdit() {
    try {
      const response = await fetch(
        `http://localhost:5000/skills/${editingSkillId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ skill: editSkillName })
        }
      )

      const data = await response.json()

      if (response.ok) {
        setSkills(previous =>
          previous.map(skill =>
            skill._id === editingSkillId ? data.data : skill
          )
        )

        setEditingSkillId(null)
        setEditSkillName('')
        setMessage(data.message)
      } else {
        setMessage(data.message)
      }
    } catch (error) {
      console.error(error)
      setMessage('Failed to update skill')
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  return (
    <section className="database-skills">
      <h2>My Technical Skills</h2>

      {loading ? (
        <p>Loading skills...</p>
      ) : (
        <p>{message}</p>
      )}

      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            {skill.name}

            <button className="edit-btn" onClick={() => {
              setEditingSkillId(skill._id)
              setEditSkillName(skill.name)
            }}>
              Edit
            </button>

            <button className="delete-btn" onClick={() => deleteSkill(skill)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter a skill"
        value={newSkill}
        onChange={event => setNewSkill(event.target.value)}
      />

      <button className="add-btn" onClick={sendSkill}>
        Add Skill
      </button>

      {editingSkillId && (
        <div>
          <input
            type="text"
            placeholder="Edit skill"
            value={editSkillName}
            onChange={event => setEditSkillName(event.target.value)}
          />

          <button className="save-btn" onClick={saveEdit}>
            Save Changes
          </button>
        </div>
      )}
    </section>
  )
}

export default SkillsManager
