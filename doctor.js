// src/doctor.js
import { db } from './firebaseInit.js';
import { collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { logAction } from './logger.js';

let currentDocId = "";

document.getElementById('prescriptionForm').addEventListener('submit', async e => {
  e.preventDefault();
  const prescription = document.getElementById('prescription').value;

  const ref = doc(db, "patients", currentDocId);
  await updateDoc(ref, {
    history: [...(await getHistory(ref)), { prescription, date: new Date().toISOString() }]
  });

  logAction("doctor", "Prescription added", { prescription });
  alert("Prescription updated");
});

async function getHistory(ref) {
  const snap = await getDocs(collection(db, "patients"));
  for (const docSnap of snap.docs) {
    if (docSnap.id === ref.id) return docSnap.data().history || [];
  }
  return [];
}

window.loadPatient = async () => {
  const token = parseInt(document.getElementById('tokenSearch').value);
  const snapshot = await getDocs(collection(db, "patients"));

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    if (data.token === token) {
      currentDocId = docSnap.id;
      document.getElementById('patientDetails').innerHTML = `
        <h3>${data.name}</h3>
        <p>Age: ${data.age}</p>
      `;
    }
  });
};
