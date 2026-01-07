loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const selectedMethod = document.querySelector('input[name="login-method"]:checked').value;
    const email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!password) {
        showAlert("Please enter your password.");
        return;
    }

    try {
        let userCredential;
        if (selectedMethod === "email") {
            userCredential = await signInWithEmailAndPassword(auth, email, password);
        } else {
            if (!phone.startsWith("+")) {
                phone = phone.startsWith("91") ? `+${phone}` : `+91${phone}`;
            }

            const formattedPhone = phone.replace(/^\+91/, "");
            const userQuery = query(collection(db, "users"), where("phone", "==", formattedPhone));
            const userSnapshot = await getDocs(userQuery);

            if (userSnapshot.empty) {
                throw new Error("not_registered");
            }

            const userData = userSnapshot.docs[0].data();
            userCredential = await signInWithEmailAndPassword(auth, userData.email, password);
        }

        const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

        if (!userDoc.exists()) {
            throw new Error("not_registered");
        }

        const userData = userDoc.data();

        // Store user details in localStorage
        localStorage.setItem("userProfile", JSON.stringify({
            name: userData.name || "User",
            email: userData.email || "No email provided",
            role: userData.role || "Member"
        }));

        showAlert("Login successful!", true);
        window.location.href = "profile.html"; // Redirect to profile page

    } catch (error) {
        if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.message === "not_registered") {
            showAlert("Password or Email/Phone number is not registered.");
        } else {
            showAlert(`Login failed: ${error.message}`);
        }
    }
});
