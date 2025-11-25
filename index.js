// function copyToClipboard(ip) {
//     navigator.clipboard.writeText(ip).then(() => {
//         // alert("Copied: " + ip);
//     });
// }

// List of IPs (this can come from API, backend, or config)
const ipAddresses = [
  "44.220.160.205",
  "54.242.178.236",
  "54.205.181.211",
  "23.22.109.26",
  "18.215.169.102",
];
const v = "14:21:00";
const startTime = new Date(`2025-11-25T${v}`).getTime();

// Render IP list into the container
const ipGrid = document.getElementById("ipGrid");
ipAddresses.forEach((ip) => {
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

////////////////////////////
////////////azure
// const ipAddresses1 = ["https://portal.azure.com/azurekmlprodkodekloud.onmicrosoft.com", "kk_lab_user_main-a8033d4a05ef4855@azurekmlprodkodekloud.onmicrosoft.com", "t^n3uxz%@k2w+9vw"];
// // Render IP list into the container
// const ipGrid1 = document.getElementById("ipGrid1");
// ipAddresses1.forEach((ip) => {
//   const div = document.createElement("div");
//   div.classList.add("ip-item");
//   div.innerHTML = `
//     ${ip} 
//     <button class="copy-btn" onclick="copyToClipboard('${ip}')">
//       <i class="fas fa-copy"></i> Copy
//     </button>
//   `;
//   ipGrid1.appendChild(div);
// });
////////////////////
///////// azure

// Copy to clipboard function
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // alert(`Copied: ${text}`);
    })
    .catch((err) => {
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
