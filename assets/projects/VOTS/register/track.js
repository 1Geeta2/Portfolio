
// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBVJNYQMsqhTjvh8xUZEsoNzi-g_z6W4-M",
    authDomain: "awareness-campaign-35809.firebaseapp.com",
    databaseURL: "https://awareness-campaign-35809-default-rtdb.firebaseio.com",
    projectId: "awareness-campaign-35809",
    storageBucket: "awareness-campaign-35809.firebasestorage.app",
    messagingSenderId: "819894669815",
    appId: "1:819894669815:web:369a7ecb2fbf6a24329ef2"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const organMarkers = {};

db.collection("organTracking").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        const organ = change.doc.data();
        const organId = change.doc.id;
        const { latitude, longitude, name, status, hospital } = organ;

        if (change.type === "added" || change.type === "modified") {
            // Update marker if it exists
            if (organMarkers[organId]) {
                organMarkers[organId].setLatLng([latitude, longitude])
                    .bindPopup(`<b>${name}</b><br>${status}<br>Hospital: ${hospital}`);
            } else {
                // Create a new marker
                organMarkers[organId] = L.marker([latitude, longitude], {
                    icon: L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png'
                    })
                }).addTo(map)
                .bindPopup(`<b>${name}</b><br>${status}<br>Hospital: ${hospital}`);
            }
        } 

        if (change.type === "removed") {
            if (organMarkers[organId]) {
                map.removeLayer(organMarkers[organId]);
                delete organMarkers[organId];
            }
        }
    });
});
