function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("Copied: " + ip);
    });
}


// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
"98.82.182.4",
    "3.84.136.54",
    "23.20.199.94",
    "184.73.136.24",
    "3.81.43.184"
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
