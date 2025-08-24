function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("Copied: " + ip);
    });
}


// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
"98.81.133.244",
    "54.198.91.16",
    "3.81.172.84",
    "54.90.231.146",
    "3.84.147.136"
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




    // Set countdown duration (in hours)
    const hours = 3;   // 👈 change this to any number of hours
    let totalSeconds = hours * 3600;

    function updateTimer() {
      let h = Math.floor(totalSeconds / 3600);
      let m = Math.floor((totalSeconds % 3600) / 60);
      let s = totalSeconds % 60;

      document.getElementById('timer').textContent =
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

      if (totalSeconds <= 0) {
        clearInterval(countdown);
        alert("⏰ Time's up!");
      }
      totalSeconds--;
    }

    // Start immediately
    updateTimer();
    const countdown = setInterval(updateTimer, 1000);
