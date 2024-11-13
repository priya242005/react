// src/withPageContainer.js
import React from 'react';

const withPageContainer = (WrappedComponent) => {
  return (props) => (
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
            background-color: rgba(255, 255, 255, 0.5); /* Increased transparency */
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
            max-width: 800px;
            width: 100%;
            text-align: center; /* Center content */
          }

          h1 {
            color: #333333;
            font-size: 2.5em;
            margin-bottom: 20px;
            font-weight: 800; /* Increased font weight */
          }

          h2 {
            font-size: 1.75em;
            margin-top: 30px;
            color: #34495e;
            font-weight: 700; /* Increased font weight */
          }

          p {
            font-size: 1.1em;
            margin-bottom: 20px;
            color: black;
            line-height: 1.5;
            font-weight: 500; /* Increased font weight */
          }

          .input-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 15px 0;
          }

          input, select {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 200px;
            font-size: 1em;
          }

          .add-btn, .schedule-btn {
            padding: 10px 20px;
            background-color: #8e44ad;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
          }

          .add-btn:hover, .schedule-btn:hover {
            background-color: #732d91;
          }

          .list-container {
            text-align: left;
            margin: 20px auto;
            max-width: 600px;
          }

          .list-item {
            padding: 15px;
            margin: 10px 0;
            border: 1px solid #e3e3e3;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
            color: #2c3e50;
          }
        `}
      </style>

      <div className="page-container">
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default withPageContainer;
