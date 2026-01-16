const btnA = document.getElementById("btnA");
const output = document.getElementById("output");

btnA.addEventListener("click", async () => {
  output.textContent = "A";

  await fetch("/press", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: "A" })
  });
});
