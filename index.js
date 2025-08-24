function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("Copied: " + ip);
    });
}


// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
"54.162.209.219",
    "3.87.25.103",
    "54.175.1.8",
    "35.171.83.213",
    "98.85.254.161"
];

// Render IP list into the container
const ipGrid = document.getElementById("ipGrid");
ipAddresses.forEach(ip => {
    const div = document.createElement("div");
    div.classList.add("ip-item");
    div.innerHTML = `
    ${ip} 
    <button class="copy-btn" onclick="copyToClipboard('ssh ubuntu@${ip}')">
      <i class="fas fa-copy"></i> Copy
    </button>
  `;
    ipGrid.appendChild(div);
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
    }).catch(err => {
        console.error("Copy failed", err);
    });
}




  
    const countdownHours = 3; // total countdown time (in hours)
    const countdownMs = countdownHours * 60 * 60 * 1000;

    // Check if we already saved an endTime
    let endTime = localStorage.getItem("countdownEndTime");

    if (!endTime) {
      // If no end time saved → create a new one (first push)
      endTime = Date.now() + countdownMs;
      localStorage.setItem("countdownEndTime", endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    function updateTimer() {
      const now = Date.now();
      const remaining = endTime - now;

      if (remaining <= 0) {
        document.getElementById("timer").textContent = "00:00:00";
        clearInterval(timerInterval);
        alert("⏰ Time's up!");
        localStorage.removeItem("countdownEndTime"); // reset for next push
        return;
      }

      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remaining / (1000 * 60)) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

      document.getElementById("timer").textContent =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    updateTimer(); // run once immediately
    const timerInterval = setInterval(updateTimer, 1000);
  
