import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAPYU7IUzdlLuSSs_GZ_Zb5tyBI9rSRtU",
    authDomain: "registration-71627.firebaseapp.com",
    projectId: "registration-71627",
    storageBucket: "registration-71627.appspot.com",
    messagingSenderId: "979133448173",
    appId: "1:979133448173:web:ffc7ec02657b67a6d931e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let userRole = null;

// Role Selection
const donorBtn = document.getElementById("donor-btn");
const recipientBtn = document.getElementById("recipient-btn");

function highlightRole(selectedBtn, otherBtn) {
    selectedBtn.classList.add("active");
    otherBtn.classList.remove("active");
}

donorBtn.addEventListener("click", () => {
    userRole = "Donor";
    highlightRole(donorBtn, recipientBtn);
    showAlert("Role Selected", "You have chosen to register as a Donor.");
});

recipientBtn.addEventListener("click", () => {
    userRole = "Recipient";
    highlightRole(recipientBtn, donorBtn);
    showAlert("Role Selected", "You have chosen to register as a Recipient.");
});

// Check if contact is email or phone number
function isEmail(contact) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(contact);
}

function isPhone(contact) {
    const phonePattern = /^\d{10}$/; // Accepts only 10-digit numbers
    return phonePattern.test(contact);
}

// Check if email is registered in Firebase Authentication
async function isEmailRegistered(email) {
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        return methods.length > 0;
    } catch (error) {
        console.error("Firebase email check error:", error);
        return false;
    }
}

// Check if phone or email exists in Firestore
async function isContactRegistered(contact) {
    try {
        const usersRef = collection(db, "users");
        const contactQuery = query(usersRef, where("contact", "==", contact));
        const querySnapshot = await getDocs(contactQuery);
        return !querySnapshot.empty;
    } catch (error) {
        console.error("Error checking contact in Firestore:", error);
        return false;
    }
}

// Form Submission for Registration
document.getElementById("register-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!userRole) {
        showAlert("Error!", "Please select whether you are registering as a Donor or a Recipient.");
        return;
    }

    if (password.length < 6) {
        showAlert("Error!", "Password should be at least 6 characters long.");
        return;
    }

    try {
        let user;
        if (isEmail(contact)) {
            // Check if the email is already registered
            if (await isEmailRegistered(contact)) {
                showAlert("Error!", "This email is already registered.");
                return;
            }

            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, contact, password);
            user = userCredential.user;
        } else if (isPhone(contact)) {
            // Check if phone is already registered in Firestore
            if (await isContactRegistered(contact)) {
                showAlert("Error!", "This phone number is already registered.");
                return;
            }

            // Create a dummy user ID for phone users (Firebase Auth does not support direct phone password authentication)
            user = { uid: contact }; // Using phone number as UID
        } else {
            showAlert("Error!", "Enter a valid email or phone number.");
            return;
        }

        // Store user data in Firestore
        await setDoc(doc(collection(db, "users"), user.uid), {
            name: name,
            contact: contact,
            role: userRole,
            registeredAt: new Date().toISOString(),
        });

        showAlert("Success!", `You have successfully registered as a ${userRole}.`);
    } catch (error) {
        console.error("Registration error:", error);
        showAlert("Error!", `An error occurred during registration: ${error.message}`);
    }
});

// Login Functionality (Supports Email & Phone)
async function loginUser(contact, password) {
    try {
        if (isEmail(contact)) {
            const userCredential = await signInWithEmailAndPassword(auth, contact, password);
            return userCredential.user;
        } else if (isPhone(contact)) {
            const usersRef = collection(db, "users");
            const phoneQuery = query(usersRef, where("contact", "==", contact));
            const querySnapshot = await getDocs(phoneQuery);

            if (querySnapshot.empty) {
                showAlert("Error!", "No account found with this phone number.");
                return null;
            }

            const userData = querySnapshot.docs[0].data();
            return userData; // Returning user data if phone number is found
        }
    } catch (error) {
        console.error("Login error:", error);
        showAlert("Error!", "Invalid credentials. Please try again.");
        return null;
    }
}

// Custom Alert Box Function
function showAlert(title, message) {
    const overlay = document.getElementById("overlay");
    const alertMessage = document.getElementById("alert-message");
    const closeAlertBtn = document.getElementById("close-alert");

    document.getElementById("alert-box").querySelector("h2").textContent = title;
    alertMessage.textContent = message;

    overlay.style.display = "block";

    closeAlertBtn.addEventListener("click", () => {
        overlay.style.display = "none";
    });
}
