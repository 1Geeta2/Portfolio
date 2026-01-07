const firebaseConfig = {
    apiKey: "AIzaSyCpomU3Ko2ROo1sWQ7pmKQ6gXncepHZolE",
    authDomain: "awarenessform.firebaseapp.com",
    databaseURL: "https://awarenessform-default-rtdb.firebaseio.com",
    projectId: "awarenessform",
    storageBucket: "awarenessform.firebasestorage.app",
    messagingSenderId: "698627418951",
    appId: "1:698627418951:web:7f1359005dda2bc5fdfa62"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Reference to the database
var awarenessformDB = firebase.database().ref("awarenessform");

document.getElementById("awarenessform").addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var details = getElementVal('details');

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Details:', details);

    saveMessages(name, email, details);

    document.querySelector(".alert").Style.display = "block";
    setTimeout(()  =>{
    document.querySelector(".alert").Style.display = "none";
    },3000);

    
document.getElementById("awarenessform").requestFullscreen();
}

const saveMessages = (name, email, details) => {
    var newawrenessform = awarenessformDB.push();
    newawrenessform.set({
        name: name,
        email: email,
        details: details,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

