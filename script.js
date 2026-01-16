let data = "";

const BACKEND_URL = "https://number-backend.onrender.com/send";

function add(n) {
  data += n;
  document.getElementById("display").innerText = data;
}

function clearAll() {
  data = "";
  document.getElementById("display").innerText = "";
  document.getElementById("status").innerText = "";
}

function send() {
  if (data === "") {
    alert("No numbers!");
    return;
  }

  fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ numbers: data })
  })
  .then(res => res.json())
  .then(result => {
    document.getElementById("status").innerText =
      "Sent: " + result.received;
    data = "";
    document.getElementById("display").innerText = "";
  })
  .catch(() => {
    document.getElementById("status").innerText =
      "Error sending data";
  });
}
