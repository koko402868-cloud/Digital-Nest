const buttonA = document.getElementById("productA");
const responseDiv = document.getElementById("response");

buttonA.addEventListener("click", () => {
  fetch("/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ product: "A" })
  })
  .then(res => res.json())
  .then(data => {
    responseDiv.textContent = data.message;
  })
  .catch(err => {
    responseDiv.textContent = "Error sending order";
    console.error(err);
  });
});
