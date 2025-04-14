// This would go in your frontend JS code (React, Vue, or plain JS)
const sendParkingData = async () => {
    const data = {
      license_plate: 'ABC-123',
      entry_time: new Date().toISOString(),
      parking_space_id: 'A12',
    };
  
    const response = await fetch('http://127.0.0.1:5502/smart-parking-frontend/src/app/parking-history/parking-history.component.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    console.log('Saved:', result);
  };
  