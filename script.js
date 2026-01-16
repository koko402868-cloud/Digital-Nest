const BACKEND_URL = "https://letter-backend.onrender.com/click";

document.getElementById("btnA").onclick = () => {
  fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ letter: "A" })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").innerText =
      "Sent: " + data.received;
  })
  .catch(() => {
    document.getElementById("status").innerText =
      "Error sending";
  });
};
