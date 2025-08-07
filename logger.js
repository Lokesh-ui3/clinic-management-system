export function logAction(user, action, details = {}) {
  const entry = {
    user,
    action,
    timestamp: new Date().toISOString(),
    details
  };
  console.log("[LOG]", JSON.stringify(entry));
  // Optional: Save to Firestore logs collection
}
