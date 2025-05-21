const socket = io("https://your-repl-name.username.repl.co"); // Replace with actual Replit URL

const msgInput = document.getElementById("msg-input");
const sendBtn = document.getElementById("send-btn");
const messages = document.getElementById("messages");
const xpDisplay = document.getElementById("xp");

let xp = 0;

sendBtn.onclick = () => {
  const msg = msgInput.value.trim();
  if (msg) {
    socket.emit("chatMessage", msg);
    msgInput.value = "";
  }
};

socket.on("chatMessage", (msg) => {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = msg;
  messages.appendChild(msgDiv);
});

socket.on("xpGain", (amount) => {
  xp += amount;
  xpDisplay.textContent = `XP: ${xp}`;
});
