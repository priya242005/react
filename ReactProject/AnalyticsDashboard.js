import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Register all necessary Chart.js components
Chart.register(...registerables);

function AnalyticsDashboard() {
  // Sample data for the bar chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [300, 500, 200, 800, 700, 600],
        backgroundColor: 'rgba(142, 68, 173, 0.8)',
        borderColor: 'rgba(142, 68, 173, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for the pie chart
  const pieData = {
    labels: ['Direct', 'Organic', 'Social Media', 'Referral'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [40, 30, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#282c34', minHeight: '100vh' }}>
      <style>
        {`
          .page-container {
            font-family: Arial, sans-serif;
            color: #ffffff;
            margin: 0 auto;
            padding: 20px;
            max-width: 900px; /* Increased max-width for better layout */
            text-align: center;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          }

          h1 {
            color: #8e44ad;
            font-size: 2.5em;
            margin-bottom: 20px;
            font-weight: bold;
          }

          h2 {
            color: #ffffff;
            font-size: 2em;
            margin: 30px 0 10px;
            font-weight: bold;
          }

          p {
            font-size: 1.2em;
            line-height: 1.5;
            margin-bottom: 20px;
          }

          .back-link {
            display: inline-block;
            margin-top: 20px;
            color: #8e44ad;
            text-decoration: none;
            font-weight: bold;
            padding: 10px 20px;
            border: 2px solid #8e44ad;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
            background-color: rgba(142, 68, 173, 0.2);
          }

          .back-link:hover {
            background-color: #8e44ad;
            color: #fff;
          }

          .chart-container {
            margin: 30px 0;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          }

          .pie-chart {
            max-width: 400px; /* Increased the pie chart size */
            margin: 0 auto; /* Center the pie chart */
          }

          .map-container {
            height: 500px; 
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            margin-top: 30px; 
          }

          /* Responsive design */
          @media (max-width: 600px) {
            .page-container {
              padding: 10px;
            }

            h1 {
              font-size: 2em;
            }

            h2 {
              font-size: 1.5em;
            }

            .back-link {
              padding: 8px 16px;
            }
          }
        `}
      </style>

      <div className="page-container">
        <h1>Analytics Dashboard</h1>
        <p>Track your performance with detailed insights.</p>
        
        <div className="chart-container">
          <h2>Website Traffic Over Time</h2>
          <Bar data={barData} options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: '#ffffff', // Legend text color
                },
              },
            },
          }} />
        </div>

        <div className="chart-container pie-chart">
          <h2>Traffic Sources</h2>
          <Pie data={pieData} options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: '#ffffff', // Legend text color
                },
              },
            },
          }} />
        </div>

        <div className="map-container">
          <h2>Website Traffic Locations</h2>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                <strong>London, UK</strong>
              </Popup>
            </Marker>
            <Marker position={[40.7128, -74.0060]}>
              <Popup>
                <strong>New York, USA</strong>
              </Popup>
            </Marker>
            <Marker position={[35.6895, 139.6917]}>
              <Popup>
                <strong>Tokyo, Japan</strong>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <Link to="/home" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;
