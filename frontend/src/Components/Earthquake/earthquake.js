import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import Header from '../Layout/header.js'
// import './App.css';
import { BASE_URL } from '../../apiConfig'; // Import the BASE_URL

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format

  useEffect(() => {
    // Function to fetch earthquake data
    const fetchEarthquakeData = async () => {
      try {
        // Make a GET request to the USGS API
        const response = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=${currentDate}&minmagnitude=4.5`);
  
        // Extract earthquake data from the response
        const allEarthquakes = response.data.features;
  
        // Filter earthquakes to include only those in the Philippines
        const philippinesEarthquakes = allEarthquakes.filter((earthquake) => {
          // Check if the 'place' property is not null before applying toLowerCase
          return earthquake.properties.place && earthquake.properties.place.toLowerCase().includes('philippines');
        });
  
        // Log the earthquake data to the console
        console.log('Earthquake Data:', philippinesEarthquakes);
  
        // Update the state with the filtered earthquake data
        setEarthquakes(philippinesEarthquakes);
      } catch (error) {
        console.error('Error fetching earthquake data:', error.message);
      }
    };
  
    // Call the function to fetch earthquake data when the component mounts
    fetchEarthquakeData();

    // Set up interval for automatic refresh every 10 seconds
    const refreshInterval = setInterval(() => {
      fetchEarthquakeData();
    }, 10000);

    // Cleanup interval to avoid memory leaks
    return () => clearInterval(refreshInterval);
  }, [currentDate]); // Include currentDate as a dependency

  // Function to send earthquake data to the backend server for saving to MongoDB
  const saveEarthquakeDataToMongoDB = async () => {
    try {
      // Make a POST request to your backend server using the BASE_URL
      await axios.post(`${BASE_URL}/api/data`, earthquakes);
      console.log('Earthquake data saved to MongoDB');
    } catch (error) {
      console.error('Error saving earthquake data to MongoDB:', error.message);
    }
  };

  return (
    <div className="App" style = {{backgroundColor: '#001F3F'}}>
      <Header/>
        <div className="table-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
          <h1 style = {{ color: '#F5E8C7'}}>Notification Earthquake Data in Philippines</h1>
          <br/>
          
          <br/>
          <table className="container">
            <thead>
              <tr>
                <th style={{ color: 'black' }}>MAGNITUDE</th>
                <th style={{ color: 'black' }}>LOCATION</th>
                <th style={{ color: 'black' }}>DATE</th>
              </tr>
            </thead>
            <tbody>
              {earthquakes.map((earthquake) => (
                <tr key={earthquake.id}>
                  <td >{earthquake.properties.mag}</td>
                  <td>
                    <a
                      href={earthquake.properties.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#F5E8C7' }}
                    >
                      {earthquake.properties.place}
                    </a>
                  </td>
                  <td style={{ color: '#F5E8C7' }}>{new Date(earthquake.properties.time).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br/>  
        <br/>   
        <br/>         
        {/* Button to store fetched data to database */}
        {/* <button onClick={saveEarthquakeDataToMongoDB}>Store Data in Database</button> */}
      
    </div>
  );
}

export default App;

const styles = `
  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.42em;
    color:#A7A1AE;
    background-color:#1F2739;
  }

  h1 {
    font-size:3em; 
    font-weight: 300;
    line-height:1em;
    text-align: center;
    color: #F5E8C7;
  }

  h2 {
    font-size:1em; 
    font-weight: 300;
    text-align: center;
    display: block;
    line-height:1em;
    padding-bottom: 2em;
    color: #FB667A;
  }

  h2 a {
    font-weight: 700;
    text-transform: uppercase;
    color: #FB667A;
    text-decoration: none;
  }

  .blue { color: #185875; }
  .yellow { color: #FFF842; }

  .container th h1 {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #185875;
  }

  .container td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
     -moz-box-shadow: 0 2px 2px -2px #0E1119;
          box-shadow: 0 2px 2px -2px #0E1119;
  }

  .container {
    text-align: left;
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
  }

  .container td, .container th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left:2%;  
  }

  /* Background-color of the odd rows */
  .container tr:nth-child(odd) {
    background-color: #323C50;
  }

  /* Background-color of the even rows */
  .container tr:nth-child(even) {
    background-color: #2C3446;
  }

  .container th {
    background-color: #ECB159;
  }

  .container td:first-child { color: #F5E8C7; }

  .container tr:hover {
    background-color: #B67352;ffffbf
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
       -moz-box-shadow: 0 6px 6px -6px #0E1119;
            box-shadow: 0 6px 6px -6px #0E1119;
  }

  .container td:hover {
    background-color: #ffffbf;
    color: black; 
    font-weight: bold;

    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }

  @media (max-width: 800px) {
    .container td:nth-child(4),
    .container th:nth-child(4) { display: none; }
  }

  a {
    text-decoration: none; /* Remove underline from all anchor tags */
    color: inherit; /* Inherit color from parent */
  }
  
  a:hover {
    text-decoration: none; /* Remove underline on hover */
  }
`;

const styleTag = document.createElement('style');
styleTag.type = 'text/css';
if (styleTag.styleSheet) {
  styleTag.styleSheet.cssText = styles;
} else {
  styleTag.appendChild(document.createTextNode(styles));
}
document.head.appendChild(styleTag);

