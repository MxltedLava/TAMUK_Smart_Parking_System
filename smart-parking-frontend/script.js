document.addEventListener('DOMContentLoaded', function() {
    const parkingSpotsContainer = document.getElementById('parking-spots');
    const bookSpotButton = document.getElementById('bookSpot');

    // Initialize parking spots (example: 10 spots)
    const totalSpots = 10;
    let parkingSpots = Array(totalSpots).fill(true); // 'true' means spot is available

    // Render parking spots
    function renderSpots() {
        parkingSpotsContainer.innerHTML = '';
        parkingSpots.forEach((isAvailable, index) => {
            const spotDiv = document.createElement('div');
            spotDiv.className = `spot ${isAvailable ? 'available' : 'booked'}`;
            spotDiv.textContent = index + 1;
            spotDiv.onclick = () => alert(`Spot ${index + 1} is ${isAvailable ? 'available' : 'booked'}`);
            parkingSpotsContainer.appendChild(spotDiv);
        });
    }

    // Book a random available spot
    function bookSpot() {
        const availableIndex = parkingSpots.findIndex(spot => spot);
        if (availableIndex >= 0) {
            parkingSpots[availableIndex] = false;
            renderSpots();
            alert(`Spot ${availableIndex + 1} booked successfully!`);
        } else {
            alert('No available spots.');
        }
    }

    // Add event listener for booking
    bookSpotButton.addEventListener('click', bookSpot);

    // Initial render
    renderSpots();
});