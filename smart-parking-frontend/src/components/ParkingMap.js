import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingMap = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/vehicle')
      .then(response => setVehicles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 text-white p-6">
      <h1 className="text-4xl text-gold-500 mb-4">Parking Availability</h1>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index} className="mb-2">
            {vehicle.name} detected with {vehicle.confidence}% confidence
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingMap;