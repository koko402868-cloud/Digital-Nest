let username = "";
const loginBtn = document.getElementById("login");
const usernameInput = document.getElementById("username");
const orderSection = document.getElementById("orderSection");
const userDisplay = document.getElementById("userDisplay");
const responseDiv = document.getElementById("response");

loginBtn.addEventListener("click", () => {
    username = usernameInput.value.trim();
    if (!username) return alert("Enter your name");
    userDisplay.textContent = username;
    orderSection.style.display = "block";
});

// Change this to your backend server URL
const backendURL = "https://YOUR_BACKEND_URL/order";

document.getElementById("btnA").addEventListener("click", () => {
    if (!username) return alert("Login first!");
    fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ letter: "A", user: username })
    })
    .then(res => res.json())
    .then(data => { responseDiv.textContent = data.message })
    .catch(err => { 
        console.error(err); 
        responseDiv.textContent = "Error sending letter"; 
    });
});
