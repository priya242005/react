// src/ContentCalendar.js
import React, { useState } from 'react';
import withPageContainer from './withPageContainer';

function ContentCalendar() {
  const [scheduledPosts, setScheduledPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postDate, setPostDate] = useState('');
  const [assignedMember, setAssignedMember] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [postType, setPostType] = useState('Blog');

  const schedulePost = () => {
    if (postTitle && postDate) {
      setScheduledPosts((prev) => [
        ...prev,
        { title: postTitle, date: postDate, member: assignedMember, platform, postType },
      ]);
      setPostTitle('');
      setPostDate('');
      setAssignedMember('');
    }
  };

  return (
    <div>
      <h1>Content Calendar</h1>
      <p>Organize and schedule content with real-time updates.</p>

      <h2>Schedule a New Post</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <input
          type="date"
          value={postDate}
          onChange={(e) => setPostDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Assign to (e.g., Alice)"
          value={assignedMember}
          onChange={(e) => setAssignedMember(e.target.value)}
        />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>LinkedIn</option>
        </select>
        <select value={postType} onChange={(e) => setPostType(e.target.value)}>
          <option>Blog</option>
          <option>Ad Campaign</option>
          <option>Social Media Post</option>
          <option>Email Newsletter</option>
        </select>
        <button className="schedule-btn" onClick={schedulePost}>Schedule Post</button>
      </div>

      <h2>Scheduled Content</h2>
      <div className="list-container">
        {scheduledPosts.map((post, index) => (
          <div key={index} className="list-item">
            <strong>{post.title}</strong><br />
            Date: {post.date} | Platform: {post.platform} | Type: {post.postType} | Assigned to: {post.member || 'Unassigned'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default withPageContainer(ContentCalendar);
