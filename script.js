// example adress 3627 N MacArthur Blvd, Warr Acres, OK 73122
let map;
let geocoder;
let markers = []; // Define the markers array
let cardContainer = document.getElementById('cardContainer');

function initMap() {
    geocoder = new google.maps.Geocoder();

    // Default address
    const defaultAddress = '2620 Keats Pl, Oklahoma City, OK';

    // Initialize the map centered on the default address
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.4686, lng: -97.5917 }, // Default center coordinates
        zoom: 9 // Set the desired zoom level
    });

    // Geocode the default address and add a marker
    geocoder.geocode({ 'address': defaultAddress }, function (results, status) {
        if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;

            // Add a marker for the default address
            new google.maps.Marker({
                map: map,
                position: location,
                title: defaultAddress
            });

            // Create a circle with a 50-mile radius
            new google.maps.Circle({
                map: map,
                center: location,
                radius: 50 * 1609.34, // 1 mile = 1609.34 meters
                strokeColor: 'red', // Border color
                strokeOpacity: 0.8,
                strokeWeight: 6,
                fillColor: 'transparent', // Transparent fill color
                fillOpacity: 0.5 // Adjust the transparency as needed
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function addMarker() {
    const address = document.getElementById('addressInput').value;

    // Geocode the address to get coordinates
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;

            // Create a marker with a unique color
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: address,
                icon: getMarkerIcon(),
            });

            // Store the marker
            markers.push(marker);

            // Create a card for the address
            const card = createCard(address);

            // Add a delete button to the card
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                // Remove the marker from the map
                marker.setMap(null);

                // Remove the card from the card container
                cardContainer.removeChild(card);
            });

            card.appendChild(deleteButton);
            cardContainer.appendChild(card);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function createCard(address) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = address;
    return card;
}

function getMarkerIcon() {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: randomColor,
        fillOpacity: 0.8,
        strokeColor: '#000',
        strokeWeight: 1,
        scale: 10,
    };
}
//Code for mialage 

function calculateAnswer() {
    // Get the input value
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    
    // Calculate the answer using the formula
   var answer = inputValue * 2;
   var minus = answer - 50;
var pay = (answer - 50) * .625;



   // Display the answer
  if (pay < 0) {
  document.getElementById("answer").innerHTML = "No miles for you.";
  document.getElementById("formula").innerHTML = "nothing here to see";
} else {
  document.getElementById("answer").innerHTML = "Pay: $" + pay;
  document.getElementById("formula").innerHTML = answer +"rt - 50 =" + minus +"@.625";
}
}
