function copyToClipboard(ip) {
    navigator.clipboard.writeText(ip).then(() => {
        alert("Copied: " + ip);
    });
}


// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
   "3.81.52.89",
    "52.91.181.25",
    "3.86.2.199",
    "18.215.242.80",
    "54.175.162.183"
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
