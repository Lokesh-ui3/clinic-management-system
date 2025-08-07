import { auth } from './firebaseInit.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Grab form and inputs
const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Optionally log the login action
      console.log(`Logged in as: ${user.email} (role: ${role})`);

      // Redirect based on role
      if (role === 'doctor') {
        window.location.href = 'doctor.html';
      } else if (role === 'receptionist') {
        window.location.href = 'receptionist.html';
      } else {
        alert('Unknown role selected.');
      }
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Login failed: " + error.message);
    });
});
