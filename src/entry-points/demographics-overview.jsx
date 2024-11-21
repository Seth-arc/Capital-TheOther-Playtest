import React from 'react';
import ReactDOM from 'react-dom/client';
import DemographicsOverview from '../components/DemographicsOverview';
import '/src/styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DemographicsOverview />
  </React.StrictMode>
);