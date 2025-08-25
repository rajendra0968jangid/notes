function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("Copied: " + ip);
    });
}


// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
"3.81.57.143",
    "18.232.157.172",
    "54.92.131.197",
    "18.212.148.238",
    "98.86.111.216"
];
const v = "11:25:00"
 const startTime = new Date(`2025-08-25T${v}`).getTime();

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




  
    // Set a fixed global start time (same for everyone)
    // Example: August 23, 2025 07:00 UTC
  

    // Duration (3 hours in milliseconds)
    const duration = 3 * 60 * 60 * 1000;

    // Calculate end time
    const endTime = startTime + duration;

    function updateCountdown() {
      const now = Date.now();
      const distance = endTime - now;

      if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "00:00:00";
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      document.getElementById("countdown").innerHTML =
        hours + "h " + minutes + "m " + seconds + "s ";
    }

    // Run immediately and then every second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
  
