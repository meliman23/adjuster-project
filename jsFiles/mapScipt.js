let map; // The map instance
let geocoder; // The geocoding service
let directionsService; // The directions service for routing
let directionsRenderer; // The directions renderer for displaying routes
let userLocation; // Stores the user's location
let markers = []; // Array to store marker information
let cardContainer = document.getElementById('cardContainer'); // Container for address cards

function initMap() {
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService(); // Initialize DirectionsService
    directionsRenderer = new google.maps.DirectionsRenderer(); // Initialize DirectionsRenderer

    // Initialize the map centered at a fallback location
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.4686, lng: -97.5917 }, // Fallback coordinates
        zoom: 9 // Initial zoom level
    });
    directionsRenderer.setMap(map); // Bind DirectionsRenderer to the map

    // Try to get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Center the map on the user's location
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);

                // Add a marker for the user's location
                new google.maps.Marker({
                    map: map,
                    position: userLocation,
                    title: "Your Location"
                });

                // Draw a 20-mile circle around the user's location
                new google.maps.Circle({
                    map: map,
                    center: userLocation,
                    radius: 20 * 1609.34, // 20 miles in meters
                    strokeColor: 'blue',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: 'transparent'
                });
            },
            () => {
                alert("Failed to get your location. Using default location.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Add a marker and show the route
function addMarker() {
    const address = document.getElementById('addressInput').value;

    // Geocode the address
    geocoder.geocode({ address: address }, function (results, status) {
        if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;

            // Add a marker for the geocoded address
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: address,
                icon: getMarkerIcon()
            });

            // Store marker details
            markers.push({ marker, location, address });

            // Create a card for the address
            const card = createCard(address);

            // Add a delete button to the card
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                // Remove marker from map and markers array
                marker.setMap(null);
                markers = markers.filter(m => m.marker !== marker);

                // Remove the card
                cardContainer.removeChild(card);
            });

            card.appendChild(deleteButton);
            cardContainer.appendChild(card);

            // Calculate and display the route to the nearest marker
            if (userLocation) {
                calculateAndDisplayRoutes();
            }
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Create an address card
function createCard(address) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = address;
    return card;
}

// Get a marker icon with a random color
function getMarkerIcon() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: randomColor,
        fillOpacity: 0.8,
        strokeColor: '#000',
        strokeWeight: 1,
        scale: 10
    };
}

// Calculate and display routes to markers from user's location
function calculateAndDisplayRoutes() {
    // Sort markers by distance to the user's location
    markers.sort((a, b) => {
        const distanceA = google.maps.geometry.spherical.computeDistanceBetween(userLocation, a.location);
        const distanceB = google.maps.geometry.spherical.computeDistanceBetween(userLocation, b.location);
        return distanceA - distanceB;
    });

    // Build waypoints for the route
    const waypoints = markers.slice(1).map(m => ({
        location: m.location,
        stopover: true
    }));

    // Define the route request
    const request = {
        origin: userLocation,
        destination: markers[0].location,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING
    };

    // Get and display the route
    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            alert('Directions request failed due to ' + status);
        }
    });
}
