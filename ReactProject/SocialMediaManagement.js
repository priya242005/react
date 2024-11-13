import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SocialMediaManagement() {
  return (
    <div className="page-wrapper">
      <style>
        {`
          .page-wrapper {
            background-image: url('https://www.brickmarketing.com/wp-content/uploads/2022/10/digital-marketing-1.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            position: relative;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px;
          }

          .page-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
            z-index: 1;
          }

          .page-container {
            position: relative;
            z-index: 2;
            background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent for readability */
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            width: 100%;
            text-align: center; /* Center content */
          }

          h1 {
            color: #8e44ad;
            font-size: 2.5em;
            margin-bottom: 20px;
            font-weight: 800; /* Increased font weight */
          }

          h2 {
            color: #34495e;
            font-size: 1.8em;
            margin: 20px 0;
            font-weight: 700; /* Increased font weight */
          }

          p {
            font-size: 1.2em;
            line-height: 1.5;
            margin-bottom: 20px;
            color: #555555;
            font-weight: 500; /* Increased font weight */
          }

          .features {
            margin: 30px 0;
            text-align: left;
          }

          .feature-item {
            background: rgba(142, 68, 173, 0.1);
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .feature-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }

          .button-container {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 15px; /* Space between buttons */
          }

          .back-link, .cta-button {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s, color 0.3s;
          }

          .back-link {
            color: #8e44ad;
            text-decoration: none;
            border: 2px solid #8e44ad;
          }

          .back-link:hover {
            background-color: #8e44ad;
            color: #fff;
          }

          .cta-button {
            background-color: #8e44ad;
            color: white;
            text-decoration: none;
          }

          .cta-button:hover {
            background-color: #732d91;
          }
        `}
      </style>

      <div className="page-container">
        <h1>Social Media Management</h1>
        <p>Schedule and publish content across multiple platforms seamlessly.</p>

        <div className="features">
          <h2>Key Features</h2>
          <div className="feature-item">✅ Multi-Platform Scheduling</div>
          <div className="feature-item">✅ Analytics and Reporting</div>
          <div className="feature-item">✅ Audience Engagement Tools</div>
          <div className="feature-item">✅ Content Calendar</div>
        </div>

        <div className="button-container">
          <Link to="/sign" className="cta-button">Get Started Now</Link>
          <Link to="/home" className="back-link">Back to Home</Link> {/* Using Link to navigate */}
        </div>
      </div>
    </div>
  );
}

export default SocialMediaManagement;
