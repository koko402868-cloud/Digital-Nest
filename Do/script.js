const buttonsContainer = document.getElementById("buttons-container");
const output = document.getElementById("output");

// စိတ်ကြိုက် key list (letter + number)
const keys = ["A", "B", "C", "D", "E", "1", "2", "3", "4", "5"];

// button generate
keys.forEach((key) => {
  const btn = document.createElement("button");
  btn.textContent = key;
  btn.addEventListener("click", async () => {
    output.textContent = key;

    // backend ကို send
    await fetch("/press", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key })
    });
  });
  buttonsContainer.appendChild(btn);
});
