// src/receptionist.js
import { db } from './firebaseInit.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { logAction } from './logger.js';

const form = document.getElementById('addPatientForm');
const patientsList = document.getElementById('patientsList');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const token = Date.now(); // simple token logic

  await addDoc(collection(db, "patients"), {
    name, age, token, bill: 0, history: []
  });

  logAction("receptionist", "New patient added", { name, token });
  alert(`Token ${token} generated`);
});

async function listPatients() {
  const snapshot = await getDocs(collection(db, "patients"));
  snapshot.forEach(doc => {
    const data = doc.data();
    patientsList.innerHTML += `<li>${data.name} (Token: ${data.token})</li>`;
  });
}
listPatients();
