// src/TeamCollaboration.js
import React, { useState } from 'react';
import withPageContainer from './withPageContainer';

function TeamCollaboration() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState('');
  const [role, setRole] = useState('Content Creator');
  const [activityLog, setActivityLog] = useState([]);

  const addMember = () => {
    if (newMember) {
      const newTeamMember = { name: newMember, role };
      setTeamMembers((prev) => [...prev, newTeamMember]);
      setActivityLog((prev) => [...prev, `${newMember} added as ${role}`]);
      setNewMember('');
    }
  };

  return (
    <div>
      <h1>Team Collaboration</h1>
      <p>Empower your team with real-time management tools.</p>

      <h2>Add Team Members</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter team member name"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Content Creator</option>
          <option>Editor</option>
          <option>Manager</option>
          <option>SEO Specialist</option>
          <option>Marketing Analyst</option>
        </select>
        <button className="add-btn" onClick={addMember}>Add Member</button>
      </div>

      <h2>Team Members</h2>
      <div className="list-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="list-item">
            {member.name} - {member.role}
          </div>
        ))}
      </div>

      <h2>Recent Activity</h2>
      <div className="list-container">
        {activityLog.map((activity, index) => (
          <div key={index} className="list-item">
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default withPageContainer(TeamCollaboration);
